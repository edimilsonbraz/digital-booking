import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkEmail, checkPassword } from "../../Scripts/validateForm";

import styles from "./styles.module.css";

export function Login() {
  const passwRef = useRef();
  const iconRef = useRef();

  const [email, setEmail] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  // Gerenciamento de erros do formulário com useState
  const [password, setPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isEmailValid = checkEmail(email);
    const isPasswordValid = checkPassword(passwRef.current.value);

    setEmailError(!isEmailValid);
    setPassword(!isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      try {
        const response = await auth(email, passwRef.current.value);
        saveToken(response.data.token);
        setUsername(response.data.nome);
        alert("Bem-vindo, " + response.data.nome + "!");
        navigate("/");
      } catch (error) {
        alert("Erro ao logar " + error);
      }
    }
    
  };

  

  useEffect(() => {
    if (token) {
      axios
        .get("http://devdigitalbooking.ctdprojetos.com.br:8080/usuario", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .catch(() => {
          // Token inválido, remover do localStorage
          localStorage.removeItem("token");
          setToken(undefined);
        });
    }
  }, [token]);

  async function auth(email, password) {
    const response = await axios.get("http://devdigitalbooking.ctdprojetos.com.br:8080/usuario", {
      email,
      password,
    });

    if (!response.data.token) {
      throw new Error("Token está indefinido.");
    }

    return response;
  }

  function saveToken(token) {
      localStorage.setItem("token", token);
      setToken(token);
    
  }

  const showHide = () => {
    if (passwRef.current.type === "password") {
      passwRef.current.type = "text";
      iconRef.current.className = `${styles.hide}`;
    } else {
      passwRef.current.type = "password";
      iconRef.current.className = "";
    }
  };


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
