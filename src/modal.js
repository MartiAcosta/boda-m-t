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

    const [errorMessages, setErrorMessages] = useState({});
    const [confirmationDisplayed, setConfirmationDisplayed] = useState(false);

    const handleConfirInvitados = async () => {
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            try {
                await axios.post('https://siquieromanuytania.com/invitados', invitadosData);
                setConfirmationDisplayed(true);
            } catch (error) {
                console.log(error);
            }
        } else {
            setErrorMessages(errors);
        }
    }


    const validateForm = () => {
        let errors = {};
        if (!invitadosData.nombre.trim() || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(invitadosData.nombre)) {
            errors.nombre = 'Nombre inválido o vacío';
        }

        if (!invitadosData.apellido.trim() || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(invitadosData.apellido)) {
            errors.apellido = 'Apellido inválido o vacío';
        }

        if (!invitadosData.cod.trim() || !/^\d+$/.test(invitadosData.cod)) {
            errors.cod = 'Código de área inválido o vacío';
        }

        if (!invitadosData.tel.trim() || !/^\d+$/.test(invitadosData.tel)) {
            errors.tel = 'Teléfono inválido o vacío';
        }

        return errors;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInvitadosData({ ...invitadosData, [name]: value });

        const newErrors = { ...errorMessages };
        if (name === 'nombre' && value.trim() && /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(value)) {
            delete newErrors.nombre;
        } else if (name === 'apellido' && value.trim() && /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(value)) {
            delete newErrors.apellido;
        } else if (name === 'cod' && value.trim() && /^\d+$/.test(value)) {
            delete newErrors.cod;
        } else if (name === 'tel' && value.trim() && /^\d+$/.test(value)) {
            delete newErrors.tel;
        } 

        setErrorMessages(newErrors);
    };

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
                                {/* <p>Precio valido de contado hasta el 20/12/2023</p> */}

                                {/* <p>Dado el formato exclusivo de nuestra celebración, hemos</p>
                                <p>optado por una contribución por asistencia para cubrir los</p>
                                <p>costos del evento.</p> */}
                            </div>
                            <div className="bank-details">
                                <div className="detail-row-value">
                                    <p>Valor tarjeta:</p>
                                    <p className="detail-value">$39000</p>
                                    <p>(hasta el 20/12/23)</p>
                                </div>
                                <div className="detail-row">
                                    <p>Cbu:</p>
                                    <p className="detail-value"> 0000003100096445598156</p>
                                </div>
                                <div className="detail-row">
                                    <p>Alias:  </p>
                                    <p className="detail-value"> boda.taniymanu</p>
                                </div>
                                <div className="detail-row">
                                    <p>Asunto:  </p>
                                    <p className="detail-value"> LUNA DE MIEL</p>
                                </div>
                            </div>
                            <div className="intro-section">
                                <p>Si preferis tomar las cosas paso a paso, optar por <span style={{ fontWeight: 'bold', backgroundColor: 'rgba(182, 112, 52, 0.60)', color: 'white' }}>  3 cuotas de $15000</span>.</p>
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
                                        onChange={handleInputChange}
                                    />
                                    {errorMessages.nombre && <div className="error">{errorMessages.nombre}</div>}
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="apellido"
                                        placeholder="Apellido"
                                        name='apellido'
                                        value={invitadosData.apellido}
                                        onChange={handleInputChange}
                                    />
                                    {errorMessages.apellido && <div className="error">{errorMessages.apellido}</div>}
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="codigo"
                                        placeholder='Codigo de area'
                                        name='cod'
                                        value={invitadosData.cod}
                                        onChange={handleInputChange}
                                    />
                                    {errorMessages.cod && <div className="error">{errorMessages.cod}</div>}
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="telefono"
                                        placeholder='Telefono'
                                        name='tel'
                                        value={invitadosData.tel}
                                        onChange={handleInputChange}
                                    />
                                    {errorMessages.tel && <div className="error">{errorMessages.tel}</div>}
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