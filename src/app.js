const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');


const app = express();

//import routes
const customerRoutes = require('./routes/customer');

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs'); //Plantillas para las vistas
app.set('views', path.join(__dirname, 'views')); //Direccion de las vistas

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: 3306,
    database: 'nodecrud'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', customerRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

// start server
app.listen(app.get('port'), ()=>{
    console.log('Server on port 3000');
});