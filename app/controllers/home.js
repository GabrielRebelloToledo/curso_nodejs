module.exports.home = function(app, req, res) {
    var connection = app.config.dbConnection();

    var noticiasModel = new app.app.models.noticiasModel(connection);

    //recuperar as 5 ultimas noticias
    noticiasModel.get5LastsNoticias(function(error, result) {
        res.render("home/index", { noticias: result });
        /* console.log(error);
        console.log(result); */
    });

    /* res.render("home/index") */
}