var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
//inicia o express
var app = express();
//incluindo os modulos

//informar que a engine de view foi mudada
app.set('view engine', 'ejs');
app.set('views', './app/views');
//recuperar informações via post
app.use(bodyParser.urlencoded({ extended: true }));
//Validador
app.use(expressValidator());

// Configuração para utilizar os arquivos estáticos do Angular
/* app.use(express.static('./public')); */

//incluindo arquivos estativos
app.use(express.static('./app/public'));
//incluindo routes,conection
consign().include('app/routes').then('config/dbConnection.js').then('app/models').then('app/controllers').into(app);


module.exports = app;