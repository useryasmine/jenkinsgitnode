const database_module = require('./database');

const article_get_all = function (callback){

    let sql = "select * from article";

    database_module.connection.query(sql,[], function (error, results, fields) {

        if (error) console.log('erreur : ',error);

        // console.log('les articles : ', results)

        if (callback){callback(error,results)};

        return results;

    });
}
exports.article_get_all = article_get_all;
