var mysql = require('mysql2');

var connMySQL = function() {

    return mysql.createConnection({
        host: 'sql108.epizy.com',
        user: 'epiz_30493486',
        password: 'TeZY18CiwzpTC',
        database: 'epiz_30493486_wordpress'
    });
    /* return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    }); */
}

module.exports = function() {
    return connMySQL;
}