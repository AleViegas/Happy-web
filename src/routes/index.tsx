// esse aqui é o routes, condicional

import React, { useContext } from 'react'
import AuthContext, { AuthProvider } from '../contexts/authContext'

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/adm/dashboard'
import DeleteOrphanage from '../pages/adm/deleteOrphanage'
import AdmLogin from '../pages/adm/login'
import LostPassword from '../pages/adm/lostPassword'
import RecoveryAccount from '../pages/adm/recoveryAccount'
import CreateOrphanage from '../pages/createOrphanage'
import Landing from '../pages/landing'
import Orphanage from '../pages/orphanage'
import OrphanagesMap from '../pages/orphanagesMap'
import Success from '../pages/success'

export default function Routes() {
    const { signed } = useContext(AuthContext)
    
// o ideial é deixar apenas auth e app routes mas não consegui
    if (signed) {
        return (
            <AuthProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route path="/app" component={OrphanagesMap} />
                        <Route path="/orphanages/create" component={CreateOrphanage} />
                        <Route path="/orphanages/:id" component={Orphanage} />
                        <Route path="/success" component={Success} />
                        <Route path="/adm/login" component={AdmLogin} />
                        <Route path="/adm/lost-password" component={LostPassword} />
                        <Route path="/adm/recovery-account" component={RecoveryAccount} />
                        <Route path="/adm/dashboard" component={Dashboard} />
                        <Route path="/adm/deleteOrphanage" component={DeleteOrphanage} />
                    </Switch>
                </BrowserRouter>
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