const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;
app.use(cors());

const pool = mysql.createPool({
    host: '193.203.166.12',
    user: 'u119656677_martina',
    password: 'CT!YLDaig5i~',
    database: 'u119656677_bodatm'
});

app.use(bodyParser.json());

// Rutas CRUD

app.get('/invitados', (req, res) => {
    pool.query('SELECT * FROM invitados', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/invitados', (req, res) => {
    const { nombre, apellido, cod, tel } = req.body;
    const query = `INSERT INTO invitados (nombre, apellido, cod, tel) VALUES ('${nombre}', '${apellido}', '${cod}', '${tel}')`;
    pool.query(query, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Invitado añadido', id: result.insertId });
    });
});

app.put('/invitados/:id', (req, res) => {
    const id = req.params.id;
    const { nombre, apellido, cod, tel } = req.body;
    const query = `UPDATE invitados SET nombre='${nombre}', apellido='${apellido}', cod='${cod}', tel='${tel}' WHERE id='${id}'`;
    pool.query(query, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Invitado actualizado' });
    });
});

app.delete('/invitados/:id', (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM invitados WHERE id'=${id}'`;
    pool.query(query, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Invitado eliminado' });
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});