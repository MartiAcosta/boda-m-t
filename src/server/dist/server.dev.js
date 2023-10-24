"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var mysql = require('mysql');

var cors = require('cors');

var https = require('https'); // Importa el módulo https


var fs = require('fs');

var morgan = require('morgan');

app.use(morgan('combined'));
var app = express();
var port = 3001;
var privateKey = fs.readFileSync('/etc/letsencrypt/live/siquieromanuytania.com/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/siquieromanuytania.com/fullchain.pem', 'utf8');
var ca = fs.readFileSync('/etc/letsencrypt/live/siquieromanuytania.com/chain.pem', 'utf8');
var credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca,
  secureProtocol: 'TLSv1_2_method'
};
app.use(cors({
  origin: 'https://siquieromanuytania.com'
}));
var pool = mysql.createPool({
  host: '193.203.166.12',
  user: 'u119656677_martina',
  password: 'CT!YLDaig5i~',
  database: 'u119656677_bodatm'
});
app.use(bodyParser.json()); // Rutas CRUD

app.get('/invitados', function (req, res) {
  pool.query('SELECT * FROM invitados', function (err, results) {
    if (err) throw err;
    console.log(err);
    res.json(results);
  });
});
app.post('/invitados', function (req, res) {
  var _req$body = req.body,
      nombre = _req$body.nombre,
      apellido = _req$body.apellido,
      cod = _req$body.cod,
      tel = _req$body.tel,
      menu = _req$body.menu;
  var query = "INSERT INTO invitados (nombre, apellido, cod, tel, menu) VALUES ('".concat(nombre, "', '").concat(apellido, "', '").concat(cod, "', '").concat(tel, "', '").concat(menu, "')");
  pool.query(query, function (err, result) {
    if (err) throw err;
    console.log(err);
    res.json({
      message: 'Invitado añadido',
      id: result.insertId
    });
  });
});
app.put('/invitados/:id', function (req, res) {
  var id = req.params.id;
  var _req$body2 = req.body,
      nombre = _req$body2.nombre,
      apellido = _req$body2.apellido,
      cod = _req$body2.cod,
      tel = _req$body2.tel,
      menu = _req$body2.menu;
  var query = "UPDATE invitados SET nombre='".concat(nombre, "', apellido='").concat(apellido, "', cod='").concat(cod, "', tel='").concat(tel, "', menu='").concat(menu, "' WHERE id='").concat(id, "'");
  pool.query(query, function (err, result) {
    if (err) throw err;
    console.log(err);
    res.json({
      message: 'Invitado actualizado'
    });
  });
});
app["delete"]('/invitados/:id', function (req, res) {
  var id = req.params.id;
  var query = "DELETE FROM invitados WHERE id'=".concat(id, "'");
  pool.query(query, function (err, result) {
    if (err) throw err;
    res.json({
      message: 'Invitado eliminado'
    });
  });
});
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(port, function () {
  console.log("Servidor corriendo en https://localhost:".concat(port));
});