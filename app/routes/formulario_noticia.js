
module.exports = function(app){

//local, função de callback
app.get('/admin', function(req, res){
    res.render("admin/form_add_noticia")
});

}



