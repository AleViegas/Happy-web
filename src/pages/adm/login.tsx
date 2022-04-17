import React, { useContext } from 'react'
import { FiArrowLeft, FiCheck } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import mapMarkerImg from '../../images/map-marker.svg'
import '../../styles/pages/adm/login.css'

import AuthContext from '../../contexts/authContext' 

export default function AdmLogin() {
    const { goBack } = useHistory()

    const { signed, signIn } = useContext(AuthContext)

    function handleSignIn() {
        signIn()
    }

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

                <aside className="login-sidebar">
                    <button type="button" onClick={goBack} className="go-back">
                        <FiArrowLeft size={24} color="#82714e"/>
                    </button>

                    <strong>Fazer login</strong>

                    <form action="" className="login-form">

                        <label htmlFor="e-mail">E-mail</label>
                        <input type="email" name="" />

                        <label htmlFor="password">Senha</label>
                        <input type="password" name="" />

                        <div className="container-link">
                            <label htmlFor="">

                                <input type="checkbox" name="" />
                                <span>
                                    <FiCheck strokeWidth="3" className="icon" />
                                </span>
                                <h1>Lembrar-me</h1>
                            </label>
                            <Link to="/adm/lost-password">Esqueci minha senha</Link>
                        </div>
                        <Link to="/adm/dashboard" className="button-login" onClick={handleSignIn}>Entrar</Link>
                    </form>

                </aside>
            </div>
        </main>

    )
}