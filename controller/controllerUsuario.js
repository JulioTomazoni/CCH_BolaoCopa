const Sequelize = require('sequelize');
const db = require('../config/db');
const Usuario = require('../config/db')
const path = require('path');

db.sequelize.sync({
  force: true
}).then(() => {
  console.log('{ force: true }');
});

module.exports = {
  async getLogin(req, res) {
    res.render('usuario/login', {
      layout: 'nomenu.handlebars'
    })
  },
  async postLogin(req, res) {
    db.Usuario.findAll({
      where: {
        login: req.body.login,
        senha: req.body.senha,
        admin: req.body.admin
      }
    }).then(usuarios => {
      if (usuarios.lenght > 0) {
        res.render('home')
      } else {
        res.redirect('/')
      }
    })
  },
  async getCreate(req, res) {
    res.render('usuario/usuarioCreate');
  },
  async postCreate(req, res) {
    db.Usuario.create({
      login: req.body.login,
      senha: req.body.senha,
      admin: req.body.admin,
    });
    res.redirect('/home');
  },
  async getList(req, res) {
    db.Usuario.findAll().then(usuarios => {
      res.render('usuario/usuarioList', {
        usuarios: usuarios.map(usuarios => usuarios.toJSON())
      });
    });
  }
}