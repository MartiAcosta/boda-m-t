import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

function Invitados() {
    const [invitados, setInvitados] = useState([]); // Estado para almacenar la lista de invitados

    useEffect(() => {
        // Función para obtener la lista de invitados desde el servidor
        const fetchInvitados = async () => {
            try {
                const response = await fetch('https://siquieromanuytania.com/invitados');
                const data = await response.json();
                setInvitados(data);
            } catch (error) {
                console.error('Error al obtener la lista de invitados:', error);
            }
        };

        fetchInvitados();
    }, []); // El array vacío como segundo argumento significa que este efecto se ejecutará una vez cuando el componente se monte

    return (
        <Route path="/invitados">
            <div>
                <h2>Lista de Invitados</h2>
                <ul>
                    {invitados.map(invitado => (
                        <li key={invitado.id}>
                            {invitado.nombre} {invitado.apellido}
                        </li>
                    ))}
                </ul>
            </div>
        </Route>
    );
};

export default Invitados;







