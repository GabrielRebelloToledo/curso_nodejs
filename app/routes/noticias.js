module.exports = function(app) {

    //local, função de callback
    app.get('/noticias', function(req, res) {
        app.app.controllers.noticias.noticias(app, req, res);
    });

    //local, função de callback
    app.get('/noticia', function(req, res) {

        app.app.controllers.noticias.noticia_descricao(app, req, res);
    });


}