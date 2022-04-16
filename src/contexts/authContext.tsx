// parte nova, API constest API
// compartilhamento de dados entre paginas

import React, { createContext, useEffect, useState } from 'react'
import api from '../services/api';

import mapMarkerImg from '../images/map-marker.svg';

import * as auth from '../services/auth'

interface AuthContextData {
    signed: boolean,
    user: object | null,
    signIn(): Promise<void>,
    signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<object | null>(null)
    const [loading, setLoading] = useState(true)

    async function signIn() {
        const response = await auth.SignIn()
        // autenticação atraves da api auth

        api.defaults.headers["Authorization"] = `Bearer ${response.token}`
        // token em todas as proximas requests

        setUser(response.user)
        localStorage.setItem('@Happy:user', JSON.stringify(response.user))
        localStorage.setItem('@Happy:token', response.token)
    }

    useEffect(() => {
        const storagedUser = localStorage.getItem('@Happy:user')
        const storagedToken = localStorage.getItem('@Happy:token')
        // multiget

        setLoading(false)


        if (storagedUser && storagedToken) {     
            // api.defaults.headers["Authorization"] = `Bearer ${storagedToken}`
            // token em todas as proximas requests

            setUser(JSON.parse(storagedUser))
        }
    },[])

    function signOut() {
        setUser(null)
        localStorage.clear()
    }

    if (loading) {
        // fazer a sidebar como component para ja monstrar ela, ou pga de reload mesmo
        // tem o onboarding, animação de primeira entrada - pode conflitar com isso caso mude o loading para o app
        return (
            <img src={mapMarkerImg} alt="Happy" style={{position:'sticky',top:"50%",left:"50%"}} />
        )
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

// fiz essa maracutaia, tirando a responsabilidade do app e limpando o codigo
