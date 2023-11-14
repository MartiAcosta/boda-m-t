const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const https = require('https'); 
const fs = require('fs');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
const port = 3001;

const privateKey = fs.readFileSync('/etc/letsencrypt/live/siquieromanuytania.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/siquieromanuytania.com/fullchain.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/siquieromanuytania.com/chain.pem', 'utf8');

const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca,
    secureProtocol: 'TLSv1_2_method'
};


app.use(cors({
    origin: 'https://siquieromanuytania.com'
}));

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
        console.log(err)
        res.json(results);
    });
});

app.get('/invitados/:id', (req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM invitados WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Error al obtener el invitado:', err);
            return res.status(500).json({ message: 'Error al obtener el invitado' });
        }
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).json({ message: 'Invitado no encontrado' });
        }
    });
});

app.post('/invitados', (req, res) => {
    console.log(req.body);
    const { nombre, apellido, cod, tel, menu } = req.body;
    const query = `INSERT INTO invitados (nombre, apellido, cod, tel, menu) VALUES ('${nombre}', '${apellido}', '${cod}', '${tel}', '${menu}')`;
    pool.query(query, (err, result) => {
        if (err) throw err;
        console.log(err)
        res.json({ message: 'Invitado añadido', id: result.insertId });
    });
});

app.put('/invitados/:id', (req, res) => {
    const id = req.params.id;
    const { nombre, apellido, cod, tel, menu } = req.body;
    const query = `UPDATE invitados SET nombre='${nombre}', apellido='${apellido}', cod='${cod}', tel='${tel}', menu='${menu}' WHERE id='${id}'`;
    pool.query(query, (err, result) => {
        if (err) throw err;
        console.log(err)
        res.json({ message: 'Invitado actualizado' });
    });
});

app.delete('/invitados/:id', (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM invitados WHERE id=${id}`;
    pool.query(query, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Invitado eliminado' });
    });
});

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(port, () => {
    console.log(`Servidor corriendo en https://localhost:${port}`);
});