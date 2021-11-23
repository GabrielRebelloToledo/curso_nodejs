var express = require('express');
//inicia o express
var app = express();

//incluindo os modulos



//informar que a engine de view foi mudada
app.set('view engine','ejs');
app.set('views','./app/views')

module.exports = app;

