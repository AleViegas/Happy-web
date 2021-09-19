import React from 'react';
import { Link } from 'react-router-dom';

import successImg from '../images/success-img.svg'
import "../styles/pages/success.css"

export default function Success() {
    return (
        <div className="page-landing">
            <div className="content-wrapper">
                <div className="container-text">
                    <strong>Ebaaa!</strong>
                    <span>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é so esperar :) </span>
                    <Link to="/app" className="back-map">
                        Voltar para o mapa
                    </Link>
                </div>
                <img src={successImg} alt="success-img" className="success-img"/>
            </div>
        </div>
    )
}