import { createContext, useState } from "react";

export const IsLoggedContext = createContext();

export const IsLoggedProvider = ({children}) =>
{
    const [isLogged, setIsLogged] = useState(false);

    const toggleIsLogged = () =>
    {
        setIsLogged(!isLogged);
    }

    return <IsLoggedContext.Provider value={{isLogged, toggleIsLogged}}>{children}</IsLoggedContext.Provider>
}