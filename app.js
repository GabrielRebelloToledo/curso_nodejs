var app = require('./config/server')

var rotaFormulario = require('./app/routes/formulario_noticia')(app);

var rotahome = require('./app/routes/home')(app);

var rotanoticias = require('./app/routes/noticias')(app);

 

//local, função de callback
/* app.get('/tecnologia', function(req, res){
    res.send("<html><body>Portal de noticias de tecnologia</body></html>")
});
app.get('/moda', function(req, res){
    res.send("<html><body>Portal de noticias de moda</body></html>")
});
app.get('/beleza', function(req, res){
    res.send("<html><body>Portal de noticias de beleza</body></html>")
}); */

app.listen(3000, function(){
    console.log("Ouvindo na porta 3000")
});