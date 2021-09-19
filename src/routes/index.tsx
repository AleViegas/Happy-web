// esse aqui é o routes, condicional

import React, { useContext } from 'react'
import AuthContext, { AuthProvider } from '../contexts/authContext'

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

export default function Routes() {
    const { signed } = useContext(AuthContext)

    if (signed) {
        return (
            <AuthProvider>
                <AuthRoutes />
                <AppRoutes />
            </AuthProvider>
        )
    }
        else {
            return(
                <AuthProvider>
                    <AppRoutes />
                </AuthProvider>
            )
        }

    // return signed ? <AuthRoutes /> : <AppRoutes />
}

// se esta logado tem acesso as duas rotas cas nao so a uma, cuidado com o login.tsx