module.exports = function(app) {

    //local, função de callback
    app.get('/formulario', function(req, res) {
        app.app.controllers.admin.form_add_noticia(app, req, res);
    });

    //salva a noticia
    app.post('/noticia/salvar', function(req, res) {
        app.app.controllers.admin.noticias_salvar(app, req, res);
    });

}