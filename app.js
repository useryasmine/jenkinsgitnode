const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


// all environments
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// add views types and path
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(express.json());

app.use(express.static(path.join(__dirname, 'public'))); // lier le dossier public au vues

// include ROUTES // le serveur HTTP Fonctionne avec les routes du ficher ROUTER.js
const routes = require('./routes/router');
app.use('/', routes);


app.listen(3000); // creation du serveur HTTP

console.log('http://localhost:3000');
