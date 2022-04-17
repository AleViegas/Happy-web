import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import mapMarkerImg from '../../images/map-marker.svg'


import '../../styles/pages/adm/recoveryAccount.css'


export default function RecoveryAccount() {
    const { goBack } = useHistory()

    return (
        
        <main>
            <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
            <div className="content-wrapper">
                    
                <div className="container-landing">
                        <Link to={"/"}>
                            <img src={mapMarkerImg} alt="Happy" />
                        </Link>                        
                        <h1>happy</h1>
                        <strong>Taboão da Serra</strong>
                        <span>São Paulo</span>
                </div>

                <aside className="recovery-sidebar">
                    <button type="button" onClick={goBack} className="go-back">
                        <FiArrowLeft size={24} color="#82714e"/>
                    </button>


                    <form action="" className="recovery-form">
                        <strong>Redefinição de senha</strong>

                        <h1>Escolha uma nova senha para voce acessar o dashboard do Happy</h1>

                        <label htmlFor="password">Nova senha</label>
                        <input type="password" name="" />

                        <label htmlFor="password">Repetir senha</label>
                        <input type="password" name="" />

                        <button>Alterar senha</button>
                    </form>

                </aside>
            </div>
        </main>

    )
}