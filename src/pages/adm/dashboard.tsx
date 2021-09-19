import React, { useContext } from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet';
import { FiLogOut, FiMapPin, FiAlertCircle, FiEdit3, FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';

import mapMarkerImg from '../../images/map-marker.svg';
import mapIcon from "../../utils/mapIcon";
import "../../styles/pages/adm/dashboard.css"

export default function Dashboard() {

    const { signOut } = useContext(AuthContext)

    let latitude;
    let longitude;
    const position = {latitude: -23.6101604, longitude: -46.765787}

    function handleSignOut() {
        signOut()
    }

    function handleNothing() {

    }

    return(
        <div id="page-dashboard">
            <aside className="dashboard-sidebar">
                <div className="div-icon-position">
                    <img src={mapMarkerImg} alt="Happy" />
                    <button type="button" onClick={handleNothing}>
                        <FiMapPin size={24} color="#FFF" />
                    </button>
                </div>

                <div className="div-pendent-logout">
                    <button type="button" onClick={handleNothing}>
                        <FiAlertCircle size={24} color="#FFF" />
                    </button>
                    <button>
                        <Link to="/adm/login" onClick={handleSignOut} className="button-logout">
                            <FiLogOut size={24} color="#FFF" />
                        </Link>
                    </button>
                </div>
            </aside>

            <main>
                <div className="page-dashboard"> 
                    <div className="div-title">
                        <strong>Orfanatos Cadastrados</strong>
                        <h1>2 orfanatos</h1>
                    </div>
{/* -23.6002527,-46.7575315 */}
                    <div className="div-orphanage-1">

                        <Map 
                            center={[-23.6101604,-46.765787]} 
                            style={{ width: '100%', height: 280 }}
                            zoom={15}
                            >
                            <TileLayer 
                            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                            />

                            { position.latitude !== 0 
                            ? (<Marker 
                            interactive={false} 
                            icon={mapIcon} 
                            position={[position.latitude,position.longitude]} />)
                            : null }
                        </Map>

                        <footer>
                            <strong>nome 1</strong>
                            <div>
                                <Link to="" className="link-button" >
                                    <FiEdit3 size={24} color="#15C3D6" />
                                </Link>
                                <Link to="/adm/deleteOrphanage" className="link-button" >
                                   <FiTrash2 size={24} color="#15C3D6" />
                                </Link>
                            </div>
                        </footer>
                    </div>

                    <div className="div-orphanage-2">

                        <Map 
                            center={[-23.6101604,-46.765787]} 
                            style={{ width: '100%', height: 280 }}
                            zoom={15}
                            >
                            <TileLayer 
                            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                            />

                            { position.latitude !== 0 
                            ? (<Marker 
                            interactive={false} 
                            icon={mapIcon} 
                            position={[position.latitude,position.longitude]} />)
                            : null }
                        </Map>

                        <footer>
                            <strong>nome 2</strong>
                            <div>
                                <Link to="" className="link-button" >
                                    <FiEdit3 size={24} color="#15C3D6" />
                                </Link>
                                <Link to="/adm/deleteOrphanage" className="link-button" >
                                    <FiTrash2 size={24} color="#15C3D6" />
                                </Link>
                            </div>
                        </footer>
                    </div>
                </div>
            </main>
        </div>
    )
}