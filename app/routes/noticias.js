var dbConnection = require('../../config/db.connection');


module.exports = function(app){
var connection = dbConnection();


//local, função de callback
app.get('/noticias1', function(req, res){
    
connection.query('select * from noticias',function(error, result){
         res.render("noticias/noticia",{noticias:result});
        console.log(error);
    });
});

/* //local, função de callback
app.get('/noticias2', function(req, res){
    res.render("noticias/noticias") 
});  */
}
