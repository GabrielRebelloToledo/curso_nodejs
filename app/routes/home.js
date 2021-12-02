module.exports = function(app) {

    //local, função de callback
    app.get('/', function(req, res) {
        app.app.controllers.home.home(app, req, res);
    });

}