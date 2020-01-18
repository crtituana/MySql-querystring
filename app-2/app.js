const express = require('express');
const mysql = require('mysql');
const app = express();
const books = require('./models/bookMysql')

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prueba'
    
});
conexion.connect((error)=>{
    if(!!error){
        console.log('error');
    }else{
        console.log('escuchando respuesta')
    }
});
app.get('/',(req, resp)=>{
    conexion.query("SELECT * FROM  books", function(error, rows, field){
      
        if(!!error){
            console.log('error el query vacio inserte datos')
        }else
        console.log('correcto query')
        console.log(rows)
        
        resp.status(200);
        resp.json(rows)
    })
});
app.get(('/booksMysql/find'),(req, res) => {
  
  const { query } = req;
  books.findOne({where: query}).then(books => {
    return res.json(books)
  });
});
app.listen(3000)