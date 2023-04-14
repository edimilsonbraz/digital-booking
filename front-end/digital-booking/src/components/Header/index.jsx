import { NavLink } from 'react-router-dom'
import { ToggleMenu } from '../ToggleMenu';
import { useContext} from 'react';
import styles from './styles.module.css'
import logo1 from '../../assets/logo1.svg'
import { IsLoggedContext } from '../../context/IsLoggedContext'
import { useUserContext } from '../../context/UserContext';



export function Header() {

  const { isLogged, toggleIsLogged } = useContext(IsLoggedContext);
  const { user } = useUserContext();
 

  // Função para lidar com o logout do usuário
  function handleLogout() {
    localStorage.removeItem('token');
    toggleIsLogged(); // Altera o estado de logado
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

        {isLogged ? (
        <div className={styles.headerButtons}>
          <span>Olá {user.name}!</span>
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
