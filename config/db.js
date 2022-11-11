//Definir os acessos para o Banco de Dados Aqui!!!
nomeDatabase = 'BolaoCopa'
nomeUsuario = 'postgres'
senhaDB = 'postgres'

const Sequelize = require('sequelize');
const sequelize = new Sequelize(nomeDatabase, nomeUsuario, senhaDB, {
  host: 'localhost',
  dialect: 'postgres'
});

var db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.Usuario = require('../models/usuario')(sequelize, Sequelize);
db.Aposta = require('../models/aposta')(sequelize, Sequelize);
db.Pagamento = require('../models/pagamento')(sequelize, Sequelize);
db.Banco = require('../models/banco')(sequelize, Sequelize);
db.Chaveaposta_times = require('../models/chaveaposta_times')(sequelize, Sequelize);

db.Usuario.hasMany(db.Banco)
db.Pagamento.belongsToMany(db.Usuario, {
  through: db.Aposta
})
db.Chaveaposta_times.belongsToMany(db.Usuario, {
  through: db.Aposta
})

module.exports = db;