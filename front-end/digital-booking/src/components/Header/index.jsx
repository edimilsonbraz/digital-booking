import { NavLink } from 'react-router-dom'
import { ToggleMenu } from '../ToggleMenu'
import { useContext, useEffect, useState } from 'react'
import styles from './styles.module.css'
import logo1 from '../../assets/logo1.svg'
import { IsLoggedContext } from '../../context/IsLoggedContext'

export function Header() {
  const { isLogged, toggleIsLogged } = useContext(IsLoggedContext)
  const [user, setUser] = useState({})

  // Função para lidar com o logout do usuárioloca
  function handleLogout() {
    localStorage.removeItem('token')
    toggleIsLogged() // Altera o estado de logado
    navigate('/')
    window.location.reload()
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      //Pega os dados do LocalStorage
      const json = localStorage.getItem('token')
      //Converto para Objeto
      setUser(JSON.parse(json))
    }
  }, [isLogged])

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
            {user && <span>Olá {user.name}!</span>}
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
