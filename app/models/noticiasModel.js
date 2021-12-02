function Noticias(connection) {
    this._connection = connection;
}

Noticias.prototype.getNoticia = function(id_noticia, callback) {
    console.log('Model' + id_noticia.id_noticia);
    this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback);
}

Noticias.prototype.getNoticias = function(callback) {
    this._connection.query('select * from noticias order by data_noticia desc', callback);
}
Noticias.prototype.salvarNoticias = function(noticia, callback) {
    this._connection.query('insert into noticias set ?', noticia, callback);
}

//recuperar as 5 ultimas noticias
Noticias.prototype.get5LastsNoticias = function(callback) {
    this._connection.query('select * from noticias order by data_noticia desc limit 5', callback);
}


module.exports = function() {


    return Noticias;
}