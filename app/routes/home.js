module.exports = function(app){

 //local, função de callback
 app.get('/', function(req, res){
    res.render("home/index")
});
 
 }
