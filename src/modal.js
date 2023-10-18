import './App.css';
import { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

function ConfirmarInvitados({ onClose }) {

    const [invitadosData, setInvitadosData] = useState({
        nombre: '',
        apellido: '',
        cod: '',
        tel: '',
    })


    const handleConfirInvitados = async () => {
        try {
            const response = await axios.post('http://localhost:3001/invitados', invitadosData);
            console.log('Invitados creado:', response.data)
        } catch (error) {
            console.log('Error al crear invitado', error);
        }
    }

    return ReactDOM.createPortal(
        <div>
            <div className="modal">
                <div className="modal-content">
                    <button type="button" className="close-button" onClick={onClose}>X</button>

                    <div className="intro-section">
                        <p>Estamos emocionados de compartir este día especial con</p>
                        <p>personas tan importantes para nosotros.</p>
                        <p>Dado el formato exclusivo de nuestra celebración, hemos</p>
                        <p>optado por una contribución por asistencia para cubrir los</p>
                        <p>costos del evento.</p>
                    </div>

                    <div className="bank-details">
                        <p>Contribución por asistencia:</p>
                        <p style={{ fontWeight: 600, fontSize:'20px', marginTop: '2px' }}>$26600</p>
                        <p>Datos de la Cuenta Bancaria:</p>
                        <p style={{ fontWeight: 600, fontSize:'20px', marginTop: '2px' }}>5566 5687 5464 6456</p>
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
                                    value={invitadosData.alimentación}
                                    onChange={e => setInvitadosData({ ...invitadosData, tel: e.target.value })}
                                />
                            </div>

                            <div className="bank-details">
                                <p>Queremos asegurarnos de que todos nuestros invitados</p>
                                <p>disfruten de la comida en nuestro gran día. Si tienes alguna</p> 
                                <p>preferencia dietética, por favor seleccione una opción:</p>
                                <select
                                    type="text"
                                    id="telefono"
                                    placeholder='Telefono'
                                    value={invitadosData.alimentación}
                                    onChange={e => setInvitadosData({ ...invitadosData, tel: e.target.value })}
                                />
                            </div>
                        </form>
                        <button className='bottomConfir' type="button" onClick={handleConfirInvitados}>Confirmar</button>
                </div>
            </div>
        </div>,
        document.body
    )
}

export default ConfirmarInvitados;