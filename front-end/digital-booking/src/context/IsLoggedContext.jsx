import { createContext, useState } from 'react'
import { useEffect } from 'react'

export const IsLoggedContext = createContext()

export const IsLoggedProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false)
	const [token, setToken] = useState('')
  // const [userEmalLogged, setUserEmailLogged] = useState('')
  // const [userData, setUserData] = useState({
  //   user
  // })

  useEffect(() => {
    const getToken = localStorage.getItem('token')
		setToken(getToken)
    if (getToken) {
      // o token existe, o usuário está autenticado
      setIsLogged(true)
      // console.log(userEmalLogged)
    }
  }, [])

  const toggleIsLogged = () => {
    setIsLogged(!isLogged)
  }

  return (
    <IsLoggedContext.Provider 
			value={{ isLogged, toggleIsLogged, token}}>
      {children}
    </IsLoggedContext.Provider>
  )
}
