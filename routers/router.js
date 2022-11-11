const express = require('express');
const controllerAposta = require('../controller/controllerAposta');
const controllerChaveAposta = require('../controller/controllerChaveAposta');
const controllerPagamento = require('../controller/controllerPagamento');
const controllerUsuario = require('../controller/controllerUsuario');
const controller = require('../controller/controllerUsuario')
const route = express.Router();

module.exports = route;
//Home
route.get("/home", function (req, res) {
  res.render('home')
});
//  Usuário Login
route.get('/', controllerUsuario.getLogin);
route.post("/login", controllerUsuario.postLogin);
//  CRUD Usuario
route.get("/usuarioCreate", controllerUsuario.getCreate);
route.post("/usuarioCreate", controllerUsuario.postCreate);
route.get("/usuarioList", controllerUsuario.getList);
//  CRUD Pagamento
route.get('/pagamentoCreate', controllerPagamento.getCreate);
route.post('/pagamentoCreate', controllerPagamento.postCreate);
route.get('/pagamentoList', controllerPagamento.getList);
// CRUD Chave de Apostas
route.get('/chaveApostaCreate', controllerChaveAposta.getCreate);
route.post('/chaveApostaCreate', controllerChaveAposta.postCreate);
route.get('/chaveApostaList', controllerChaveAposta.getList);
//  CRUD Aposta
route.get('/apostaCreate', controllerAposta.getCreate);
route.post('/apostaCreate', controllerAposta.postCreate);
route.get('/apostaList', controllerAposta.getList);