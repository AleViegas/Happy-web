import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from '.././pages/landing'
import OrphanagesMap from '.././pages/orphanagesMap'
import Orphanage from '.././pages/orphanage'
import CreateOrphanage from '.././pages/createOrphanage'
import Success from '.././pages/success'
import AdmLogin from '.././pages/adm/login'


function AppRoutes() {
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/app" component={OrphanagesMap} />
            <Route path="/orphanages/create" component={CreateOrphanage} />
            <Route path="/orphanages/:id" component={Orphanage} />
            <Route path="/success" component={Success} />
            <Route path="/adm/login" component={AdmLogin} />
        </Switch>
    </BrowserRouter>
    )
}

export default AppRoutes