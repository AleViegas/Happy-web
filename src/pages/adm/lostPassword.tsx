import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

import mapMarkerImg from '../../images/map-marker.svg'


import '../../styles/pages/adm/lostPassword.css'


export default function LostPassword() {
    const { goBack } = useHistory()

    return (
        
        <main>
            <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
            <div className="content-wrapper">
                    
                <div className="container-landing">
                        <img src={mapMarkerImg} alt="Happy"/>
                        <h1>happy</h1>
                        <strong>Taboão da Serra</strong>
                        <span>São Paulo</span>
                </div>

                <aside className="lost-sidebar">
                    <button type="button" onClick={goBack} className="go-back">
                        <FiArrowLeft size={24} color="#82714e"/>
                    </button>

                    <form action="" className="lost-form">
                        
                        <strong>Esqueci a senha</strong>
                        <h1>Sua redefinição de senha será enviada para o seu e-mail cadastrado.</h1>


                        <label htmlFor="e-mail">E-mail</label>
                        <input type="email" name="" />

                        <button>Entrar</button>
                    </form>

                </aside>
            </div>
        </main>

    )
}