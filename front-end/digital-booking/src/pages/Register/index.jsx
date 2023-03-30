import axios from "axios";
import { useRef, useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkName, checkConfirmPassword, checkEmail, checkPassword } from "../../Scripts/validateForm";
import styles from './styles.module.css';




export function Register() {
  const passwRef = useRef();
  const confirmPasswRef = useRef();
  const iconRef = useRef();
  const nomeRef = useRef();
  const sobrenomeRef = useRef();

  const [email, setEmail] = useState('');

  //Gerenciamento de erros do form com useState
  const [nome, setNome] = useState(false);
  const [sobrenome, setSobrenome] = useState(false);
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const navigate = useNavigate()

  async function registerUser(userData) {
    return await axios.post("http://devdigitalbooking.ctdprojetos.com.br:8080/usuario/salvar", userData);
  }

  const handlerSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      nome: nomeRef.current.value,
      sobrenome: sobrenomeRef.current.value,
      email: email,
      password: passwRef.current.value
    };


    navigate("/Login")
  
    try {
      const response = await registerUser(userData);
      console.log(response); // Tratar a resposta do servidor aqui
    } catch (error) {
      console.log(error); // Tratar o erro aqui
      alert("Erro ao se cadastrar  " + error)
    }




    checkEmail(email) ? setEmailError(false) : setEmailError(true);
    checkPassword(passwRef.current.value) ? setPassword(false) : setPassword(true);
    checkConfirmPassword(passwRef.current.value, confirmPasswRef.current.value) ? setConfirmPassword(false) : setConfirmPassword(true);
    checkName(nomeRef.current.value) ? setNome(false) : setNome(true);
    checkName(sobrenomeRef.current.value) ? setSobrenome(false) : setSobrenome(true);
  };

  

  const showHide = () => //Função para visualização de senha do campo input
  {
    if (passwRef.current.type === 'password') {
      passwRef.current.type = "text"
      iconRef.current.className = `${styles.hide}`

    } else {
      passwRef.current.type = "password"
      iconRef.current.className = ""
    }
  }

  return (
    <div className={styles.register}>
      <h1>Criar conta</h1>
      <form action="">
        <div>
          <div>
            <label htmlFor="name">Nome</label>
            <input className={nome ? 'border-error' : ''} ref={nomeRef} type="text" name="" id="name" />
          </div>
          <div>
            <label htmlFor="lastname">Sobrenome</label>
            <input className={sobrenome ? 'border-error' : ''} ref={sobrenomeRef} type="text" name="" id="lastname" />
          </div>
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input className={emailError ? 'border-error' : ''} type="email" name="" id="email" onChange={e => setEmail(e.target.value)} value={email} />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <div className={styles.containerPassword}>
            <input className={password ? 'border-error' : ''} ref={passwRef} type="password" name="" id="password" />

            <div ref={iconRef} id={styles.icon} onClick={showHide}></div>

          </div>
        </div>
        <div>
          <label htmlFor="confirmpassword">Confirmar Senha</label>
          <input className={confirmPassword ? 'border-error' : ''} ref={confirmPasswRef} type="password" name="" id="confirmpassword" />
        </div>
        <div>
          <button type="submit" onClick={handlerSubmit}>Criar conta</button>
          <span>Já tem uma conta? <Link to="/login">Iniciar sessão</Link></span>
        </div>
      </form>
      {nome || sobrenome || password || confirmPassword || emailError ? <div className={styles.containerError}>
        <ul>
          {nome ? <li> * O nome digitado não é válido</li> : ''}
          {sobrenome ? <li> * O sobrenome digitado não é válido</li> : ''}
          {emailError ? <li> * E-mail digitado não é válido</li> : ''}
          {password ? <li> * A senha deve ter mais de seis caracteres.</li> : ''}
          {confirmPassword ? <li> * As senhas devem ser idênticas</li> : ''}
        </ul>
      </div> : ''}
    </div>
  );
}