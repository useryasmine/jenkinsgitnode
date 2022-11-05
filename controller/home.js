const article_module = require('./../model/article');

const homeControler = function (req,res){

/*    let products = [
        {'product_id':1,'product_name':'produit1'},
        {'product_id':2,'product_name':'produit2'}
    ]*/
    article_module.article_get_all(function (err,result){
        res.render('home',{
            products : result
        })
    })
}

const homeControler1 = function (req,res){
    res.render('home')
}

exports.homeControler = homeControler;
exports.homeControler1 = homeControler1;
