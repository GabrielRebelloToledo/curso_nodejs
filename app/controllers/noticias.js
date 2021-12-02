module.exports.noticias = function(app, req, res) {
    //estabelece a conexão com o banco
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasModel(connection);

    noticiasModel.getNoticias(function(error, result) {
        res.render("noticias/noticias", { noticias: result });
        console.log(error);
    });
}
module.exports.noticia_descricao = function(app, req, res) {
    //estabelece a conexão com o banco
    var connection = app.config.dbConnection();

    var noticiasModel = new app.app.models.noticiasModel(connection);

    var id_noticia = req.query;
    console.log(req.query);

    noticiasModel.getNoticia(id_noticia, function(error, result) {
        res.render("noticias/noticia", { noticia: result });
        console.log(error);
    });
}