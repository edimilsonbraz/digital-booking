import { NavLink } from 'react-router-dom'
import { ToggleMenu } from '../ToggleMenu';
import { useState } from 'react';
import styles from './styles.module.css'
import logo1 from '../../assets/logo1.svg'
import { useEffect } from 'react';


export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nome, setNome] = useState('');

  // Função para lidar com o logout do usuário
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // o token existe, o usuário está autenticado
      setIsLoggedIn(true);
      const nomeUsuario = obterNomeUsuario(token);
      setNome(nomeUsuario);
    }
  }, []);

  function obterNomeUsuario(token) {
    //TODO: faça a lógica para obter o nome do usuário a partir do token
    return 'João da Silva'; // apenas um exemplo
  };

  

  // Função para lidar com o logout do usuário
  function handleLogout() {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate("/");
    window.location.reload();
  }


  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerImg}>
          <NavLink to="/" end title="Home">
            <img src={logo1} alt="" />
          </NavLink>
          <p>Digital Booking</p>
        </div>
        <ToggleMenu />

        {isLoggedIn ? (
          <div className={styles.headerButtons}>
            <span>Olá, {nome}!</span>
            <button onClick={handleLogout}>Sair</button>
          </div>
        ) : (
          <div className={styles.headerButtons}>
            <NavLink to="/register" end title="Criar conta">
              <button>Criar conta</button>
            </NavLink>
            <NavLink to="/login" end title="Iniciar sessão">
              <button>Iniciar sessão</button>
            </NavLink>
          </div>
        )}
      </div>
    </>
  )
}
