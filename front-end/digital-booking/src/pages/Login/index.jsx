import { useRef, useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { checkEmail, checkPassword } from '../../Scripts/validateForm'
import { UserContext } from '../../context/UserContext'

import styles from './styles.module.css'
import api from '../../service/api'
import { ToastContainer, toast } from 'react-toastify'

export function Login() {
  const { setUserData } = useContext(UserContext);
  const passwRef = useRef()
  const iconRef = useRef()

  const [email, setEmail] = useState('')
  const [token, setToken] = useState({
    token: '',
    id: null,
    name: ''
  })

  const navigate = useNavigate()

  // Gerenciamento de erros do formulário com useState
  const [password, setPassword] = useState(false)
  const [emailError, setEmailError] = useState(false)

  function saveToken(token) {
    localStorage.setItem('token', JSON.stringify(token))
    setToken(token)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    login()
  }

  async function login() {
    const isEmailValid = checkEmail(email)
    const isPasswordValid = checkPassword(passwRef.current.value)

    setEmailError(!isEmailValid)
    setPassword(!isPasswordValid)   

    if (isEmailValid && isPasswordValid) {
      try {
        const response = await auth(email, passwRef.current.value)

        saveToken({
          token: response.data.token,
          id: response.data.id,
          name: response.data.name
        })

        //TODO: Salvar os dados do usuário no Context
        setUserData({
          id: response.data.id,
          email: response.data.email,
          name: response.data.name
        })

        console.log(response.data)
        toast('Bem-vindo, ' + response.data.name , {type: "success", autoClose: 2000})
        navigate('/')
        // window.location.reload(false)
      } catch (error) {
        toast('Erro ao logar ' + error, {type: "error", autoClose: 2000})
      }
    }
  }

  useEffect(() => {
    //Poderia validar se token !== '' 
    if (token) {
      api.post('api/v1/auth/authenticate', {
          headers: { Authorization: `Bearer ${token}` }
        })
        .catch(() => {
          // Token inválido, remover do localStorage
          localStorage.removeItem('token')
          setToken(undefined)
        })
    }
  }, [token])

  async function auth(email, password) {
    const response = await api.post('api/v1/auth/authenticate', {
      email,
      password
    })
   
    if (!response.data.token) {
      throw new Error('Token está indefinido.')
    }
    
    return response
  }

  const showHide = () => {
    if (passwRef.current.type === 'password') {
      passwRef.current.type = 'text'
      iconRef.current.className = `${styles.hide}`
    } else {
      passwRef.current.type = 'password'
      iconRef.current.className = ''
    }
  }

  return (
    <>
      <div className={styles.login}>
        <h1>Iniciar sessão</h1>
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              className={emailError ? 'border-error' : ''}
              type="email"
              name=""
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className={styles.loginpassword}>
            <label htmlFor="password">Senha</label>
            <input
              className={password ? 'border-error' : ''}
              ref={passwRef}
              type="password"
              name=""
              id="password"
            />
            <div ref={iconRef} id={styles.icon} onClick={showHide}></div>
          </div>

          <div>
            <button type="submit" onClick={handleSubmit}>
              Iniciar
            </button>
            <span>
              Não é cadastrado? <Link to="/register">Criar conta</Link>
            </span>
          </div>
        </form>
        {password || emailError ? (
          <div className={styles.containerError}>
            <ul>
              {emailError ? <li> * E-mail digitado não é válido</li> : ''}
              {password ? (
                <li>* A senha deve ter mais de seis caracteres.</li>
              ) : (
                ''
              )}
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>
      <ToastContainer />
    </>
  )
}
