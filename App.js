const db = require('./config/db')
const path    = require('path')
const express = require('express')

host = 'localhost';
port = 8000;

app = express();

app.use(
  express.urlencoded({
    extended: true
  }))
  
db.sequelize.sync({force: true}).then(() => {  //Comentar aqui
  console.log('{ force: true }')
})

app.get('/usuario', function(req, res){ 
  (async() => {
    const usuarios = await db.Usuario.findAll()
    res.send(JSON.stringify(usuarios))
  })();
});

app.get('/login', function(req, res){
  res.sendFile(path.join(__dirname + '/HTML/tela-login'))
})

app.post('/register', function(req, res){
  db.Usuario.create({
    usuario: req.body.usuario,
    senha  : req.body.senha,
    admin  : req.body.admin,  
  })
  res.send('Usuario Cadastrado!')
})

app.use(express.static('CSS'));
app.use(express.static('IMAGES'));
app.use(express.static('JS'));
app.use('/CSS', express.static('CSS'));
app.use('/IMAGES', express.static('IMAGES'));
app.use('/JS', express.static('JS'));

app.listen(port, function(){
  console.log(`Servidor no https://${host}:${port}`);
})

