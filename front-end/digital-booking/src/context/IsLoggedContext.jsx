import { createContext, useState } from "react";
import { useEffect } from 'react';

export const IsLoggedContext = createContext();

export const IsLoggedProvider = ({children}) =>
{
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          // o token existe, o usuário está autenticado
          setIsLogged(true);
        }
    }, []);


    const toggleIsLogged = () =>
    {
        setIsLogged(!isLogged);
    }

    return <IsLoggedContext.Provider value={{isLogged, toggleIsLogged}}>{children}</IsLoggedContext.Provider>
}