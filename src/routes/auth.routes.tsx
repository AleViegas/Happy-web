import React from 'react'   
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LostPassword from '.././pages/adm/lostPassword'
import RecoveryAccount from '.././pages/adm/recoveryAccount'
import Dashboard from '.././pages/adm/dashboard'
import DeleteOrphanage from '.././pages/adm/deleteOrphanage'

function AuthRoutes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/adm/lost-password" component={LostPassword} />
                <Route path="/adm/recovery-account" component={RecoveryAccount} />
                <Route path="/adm/dashboard" component={Dashboard} />
                <Route path="/adm/deleteOrphanage" component={DeleteOrphanage} />
            </Switch>
        </BrowserRouter>
    )
}

export default AuthRoutes