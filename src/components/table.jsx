import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GestionarInvitados = () => {

    const [invitados, setInvitados] = useState([]);
    const [edicionActiva, setEdicionActiva] = useState(false);

    useEffect(() => {
        const obtenerInvitados = async () => {
            try {
                const resultado = await axios.get('https://siquieromanuytania.com/invitados');
                setInvitados(resultado.data.map(inv => ({ ...inv, editing: false }))); // Agregar propiedad de edición
            } catch (error) {
                console.error('Error al obtener invitados:', error);
            }
        };

        obtenerInvitados();
    }, []);

    const handleInputChange = (index, e) => {
        const newInvitados = [...invitados];
        newInvitados[index][e.target.name] = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setInvitados(newInvitados);
    };

    const handleEditClick = (index) => {
        const updatedInvitados = [...invitados];
        updatedInvitados[index].editing = !updatedInvitados[index].editing;
        setInvitados(updatedInvitados);
    };

    const handleUpdateInvitado = async (index) => {
        const invitado = invitados[index];
        if (!invitado || !invitado.id) {
            console.error('El invitado no tiene ID o no está definido');
            return;
        }
        try {
            const response = await axios.put(`https://siquieromanuytania.com/invitados/${invitado.id}`, invitado);
            const updatedInvitados = [...invitados];
            updatedInvitados[index] = response.data; // Suponiendo que el servidor devuelve el invitado actualizado
            setInvitados(updatedInvitados);
            alert('Invitado actualizado');
        } catch (error) {
            console.error('Error al actualizar invitado:', error);
        }
    };

    const handleEliminarClick = async (id) => {
        try {
            await axios.delete(`https://siquieromanuytania.com/invitados/${id}`);
            alert('Invitado eliminado');
            const newInvitados = invitados.filter((invitado) => invitado.id !== id);
            setInvitados(newInvitados);
        } catch (error) {
            console.error('Error al eliminar invitado:', error);
        }
    };

    const styles = {
        input: {
            padding: '8px',
            margin: '4px 0',
            border: '1px solid #ddd',
            borderRadius: '4px',
        },
        checkbox: {
            margin: '30px',
        },
        button: {
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '8px 16px',
            margin: '4px 2px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
        form: {
            marginBottom: '20px',
            padding: '10px',
        },
        table: {
            backgroundColor: 'rgba(182, 112, 52, 0.60)',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center',

        },
        encabezado: {
            display: 'flex',
            flexWrap: 'nowrap',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            width: '100%',
            height: '83px',
        },
        th: {
            margin: '40px',
            padding: '8px'
        }
    };


    return (
        <>
            <table style={styles.table}>
                <thead>
                    <tr style={styles.encabezado}>
                        <th style={styles.th}>Nombre</th>
                        <th style={styles.th}>Apellido</th>
                        <th style={styles.th}>Código</th>
                        <th style={styles.th}>Teléfono</th>
                        <th style={styles.th}>Menu</th>
                        <th style={styles.th}>Cuota</th>
                        <th style={styles.th}>Pago</th>
                    </tr>
                </thead>
                <tbody>
                    {invitados.map((invitado, index) => (
                        <tr key={invitado.id}>
                            <td>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        handleUpdateInvitado(invitado, index);
                                    }}
                                    style={styles.form}
                                >

                                    <input
                                        type="text"
                                        name="nombre"
                                        style={styles.input}
                                        value={invitado.nombre || ''}
                                        onChange={(e) => handleInputChange(index, e)}
                                        readOnly={!edicionActiva}
                                    />
                                    <input
                                        type="text"
                                        name="apellido"
                                        style={styles.input}
                                        value={invitado.apellido || ''}
                                        onChange={(e) => handleInputChange(index, e)}
                                        readOnly={!edicionActiva}
                                    />
                                    <input
                                        type="text"
                                        name="cod"
                                        style={styles.input}
                                        value={invitado.cod || ''}
                                        onChange={(e) => handleInputChange(index, e)}
                                        readOnly={!edicionActiva}
                                    />
                                    <input
                                        type="text"
                                        name="tel"
                                        style={styles.input}
                                        value={invitado.tel || ''}
                                        onChange={(e) => handleInputChange(index, e)}
                                        readOnly={!edicionActiva}
                                    />
                                    <input
                                        type="text"
                                        name="menu"
                                        style={styles.input}
                                        value={invitado.menu || ''}
                                        onChange={(e) => handleInputChange(index, e)}
                                        readOnly={!edicionActiva}
                                    />
                                    <input
                                        type="text"
                                        name="cuota"
                                        style={styles.input}
                                        value={invitado.cuota || ''}
                                        onChange={(e) => handleInputChange(index, e)}
                                        readOnly={!edicionActiva}
                                    />
                                    <select
                                        name="pago"
                                        style={styles.checkbox}
                                        value={invitado.pago ? 'si' : 'no'}
                                        onChange={(e) =>
                                            handleInputChange(index, {
                                                target: { name: e.target.name, value: e.target.value === 'si' },
                                            })
                                        }
                                        disabled={!edicionActiva}
                                    >
                                        <option value="si">Sí</option>
                                        <option value="no">No</option>
                                    </select>
                                    <td>
                                        <button onClick={() => handleEditClick(index)}>
                                            {invitado.editing ? 'Guardar' : 'Editar'}
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleEliminarClick(invitado.id, index)}>
                                            Eliminar
                                        </button>
                                    </td>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default GestionarInvitados;






