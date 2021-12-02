var app = require('./config/server');

/* var rotaFormulario = require('./app/routes/formulario_noticia')(app);

var rotahome = require('./app/routes/home')(app);

var rotanoticias = require('./app/routes/noticias')(app); */



app.listen(3000, function() {
    console.log("Ouvindo na porta 3000")
});