import './App.css';
import { useState } from 'react';
import axios from 'axios'; 
import React from 'react';
import ReactDOM from 'react-dom';

function ConfirmarInvitados({ onClose }) {

    const [invitadosData, setInvitadosData] = useState({
        nombre: '',
        apellido: '',
        cod: '',
        tel: '',
        menu: '',
    })

    const [confirmationDisplayed, setConfirmationDisplayed] = useState(false);

    const handleConfirInvitados = async () => {
        if (validateForm()) {
            try {
                await axios.post('https://siquieromanuytania.com/invitados', invitadosData);
                setConfirmationDisplayed(true);
            } catch (error) {
                console.log(error)
            }
        } else {
            // Puedes mostrar un mensaje de error o hacer algo más si la validación falla
            console.log('Validación fallida');
        }
    }

    const validateForm = () => {
        const { nombre, apellido, cod, tel } = invitadosData;
    
        if (!nombre.trim() || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(nombre)) {
            return false;
        }
        
        if (!apellido.trim() || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(apellido)) {
            return false;
        }
        
        if (!cod.trim() || !/^\d+$/.test(cod)) {
            return false;
        }
        
        if (!tel.trim() || !/^\d+$/.test(tel)) {
            return false;
        }
        
        return true;
    }


    return ReactDOM.createPortal(
        <>
            <div className="modal">
                <div className="modal-content">
                    <button type="button" className="close-button" onClick={onClose}>X</button>
                    {confirmationDisplayed ? (
                        <div className="confirmation-message">
                            <div className='iconDance'>
                                <div className='dance'></div>
                            </div>
                            <p className='confirmation-message-zapatos'>No olvides llevar calzado comodo</p>
                            <p className='confirmation-message-zapatos'>para bailar sobre el pasto</p>
                            <p className='confirmation-message-esperamos'>Te esperamos</p>
                        </div>
                    ) : (
                        <div>
                            <div className="intro-section">
                                <p>Estamos emocionados de compartir este día especial con</p>
                                <p>personas tan importantes para nosotros.</p>
                                {/* <p>Dado el formato exclusivo de nuestra celebración, hemos</p>
                                <p>optado por una contribución por asistencia para cubrir los</p>
                                <p>costos del evento.</p> */}
                            </div>

                            <div className="bank-details">
                                <p>Contribución por asistencia:</p>
                                <p style={{ fontWeight: 600, fontSize: '18px', marginTop: '2px' }}>$26600</p>
                                <p>Datos de la Cuenta Bancaria:</p>
                                <p style={{ fontWeight: 600, fontSize: '18px', marginTop: '2px' }}>5566 5687 5464 6456</p>
                            </div>
                            <div className="confirm-details">
                                <p>Confirma tu asistencia</p>
                            </div>
                            <form onSubmit={e => e.preventDefault()} className='form-container'>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="nombre"
                                        name='nombre'
                                        placeholder='Nombre'
                                        value={invitadosData.nombre}
                                        onChange={e => setInvitadosData({ ...invitadosData, nombre: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="apellido"
                                        placeholder="Apellido"
                                        value={invitadosData.apellido}
                                        onChange={e => setInvitadosData({ ...invitadosData, apellido: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="codigo"
                                        placeholder='Codigo de area'
                                        value={invitadosData.dni}
                                        onChange={e => setInvitadosData({ ...invitadosData, cod: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="telefono"
                                        placeholder='Telefono'
                                        value={invitadosData.tel}
                                        onChange={e => setInvitadosData({ ...invitadosData, tel: e.target.value })}
                                    />
                                </div>

                                <div className="bank-details-menu">
                                    <p>Queremos asegurarnos de que todos nuestros invitados</p>
                                    <p>disfruten de la comida en nuestro gran día. Si tienes alguna</p>
                                    <p>preferencia dietética, por favor seleccione una opción:</p>
                                    <select
                                        type="text"
                                        id="menu"
                                        value={invitadosData.menu}
                                        onChange={e => setInvitadosData({ ...invitadosData, menu: e.target.value })}
                                    >
                                        <option value="">Selecciona menú</option>
                                        <option value="celiaco">Celíaco</option>
                                        <option value="vegano">Vegano</option>
                                        <option value="vegetariano">Vegetariano</option>
                                    </select>
                                </div>
                            </form>
                            <div className='container-bottomConfir'>
                                <button className='bottomConfir' type="button" onClick={handleConfirInvitados}>Aceptar</button>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </>,
        document.body
    )
}

export default ConfirmarInvitados;