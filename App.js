const db = require('./config/db')
const routes = require('./routers/router')
const path = require('path')
const express = require('express')

host = 'localhost';
port = 8000;

app = express();
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use(routes)

app.use(express.static('CSS'));
app.use(express.static('IMAGES'));
app.use(express.static('JS'));
app.use('/CSS', express.static('CSS'));
app.use('/IMAGES', express.static('IMAGES'));
app.use('/JS', express.static('JS'));

app.listen(port, function () {
  console.log(`Servidor no https://${host}:${port}`);
})