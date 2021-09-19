import React from 'react';
import { Link } from 'react-router-dom';

import deleteImg from '../../images/delete-img.svg'
import "../../styles/pages/adm/deleteOrphange.css"

export default function DeleteOrphanage() {
    return (
        <div className="page-deleteOrphanage">
            <div className="content-wrapper">
                <div className="container-text">
                    <strong>Excluir!</strong>
                    <span> Você tem certeza que quer excluir o Orfanato dale </span>
                    <Link to="" className="back-button">
                        Voltar para o mapa
                    </Link>
                </div>
                <img src={deleteImg} alt="delete-img" className="success-img"/>
            </div>
        </div>
    )
}