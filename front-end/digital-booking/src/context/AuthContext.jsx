import { createContext, useEffect, useState } from "react";
import api from "../service/api";


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  // const [token, setToken] = useState('')

  useEffect(() => {
    const user = getUserLocalStorage()

    if(user) {
      setUser(user)
    }
  }, [])

  async function authenticate(email, password) {
    const response = await LoginRequest(email, password)

    const payload = {
      token: response.data.token,
      id: response.data.id,
      name: response.data.name
    }

    setUser(payload)
    setUserLocalStorage(payload)
  }

  async function LoginRequest(email, password) {
    try {
      const request = await api.post('api/v1/auth/authenticate', {
        email, 
        password
      })
      return request.data
    } catch (error) {
      return null
    }
  }


  function logout() {
    setUser(null)
    setUserLocalStorage(null)
  }

  function setUserLocalStorage(user) {
    localStorage.setItem("DB-BOOKING", JSON.stringify(user))
  }

  function getUserLocalStorage() {
    const json = localStorage.getItem("DB-BOOKING")

    if(!json) {
      return null;
    }

    const user = JSON.parse(json)

    return user ?? null

  }

  return (
    <AuthContext.Provider value={{...user, authenticate, logout}}>
      {children}
    </AuthContext.Provider>
  )
}