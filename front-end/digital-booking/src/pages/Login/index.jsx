import axios from "axios";
import { useRef, useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { checkEmail, checkPassword } from '../../Scripts/validateForm'

import styles from './styles.module.css';

export function Login() {

  const passwRef = useRef()
  const iconRef = useRef()

  const [email, setEmail] = useState('')
  const [token, setToken] = useState(localStorage.getItem('token'))

  const navigate = useNavigate()

  //Gerenciamento de erros do form com useState
  const [password, setPassword] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const handlerSubmit = (event) => {
    event.preventDefault()

    auth()

    

    checkEmail(email) ? setEmailError(false) : setEmailError(true)
    checkPassword(passwRef.current.value)
      ? setPassword(false)
      : setPassword(true)

  }

  useEffect(() => {
    if (token) {
      axios.get('http://devdigitalbooking.ctdprojetos.com.br:8080/usuario', {
        headers: { Authorization: `Bearer ${token}` }
      }).catch(() => {
        // token inválido, remover do localStorage
        localStorage.removeItem('token')
        setToken(null)
      })
    }
  }, [token])



  const showHide = () =>
  {
    if (passwRef.current.type === 'password') {
      passwRef.current.type = 'text'
      iconRef.current.className = `${styles.hide}`

    } else {
      passwRef.current.type = 'password'
      iconRef.current.className = ''
    }
  }

  async function auth() {
    try {
      const response = await axios.get("http://devdigitalbooking.ctdprojetos.com.br:8080/usuario", {
        email,
        password: passwRef.current.value,
      });

      navigate("/")
      saveToken(response.data.token);
      alert("Bem vindo!");
    } catch (error) {
      alert("Erro ao logar  " + error);
    }
    window.location.reload();
  }

  function saveToken(token) {
    localStorage.setItem('token', token)
    setToken(token)
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
            <button type="submit" onClick={handlerSubmit}>
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
              {password ? <li>* A senha deve ter mais de seis caracteres.</li> : ''}
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}
