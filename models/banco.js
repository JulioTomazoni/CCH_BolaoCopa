module.exports = (sequelize, Sequelize) => {
  const Banco = sequelize.define('banco', {
    id_banco : {
      type: Sequelize.INTEGER,
      autoIncrement: true, allowNull: false, primaryKey: true
    },  
    banco: {
      type: Sequelize.STRING, allowNull: false
    },
    agencia: {
      type: Sequelize.STRING, allowNull: false
    },
    numero_cartao: {
      type: Sequelize.INTEGER, allowNull: false
    }
  });
  return Banco;
}



