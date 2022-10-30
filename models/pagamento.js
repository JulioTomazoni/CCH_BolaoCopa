module.exports = (sequelize, Sequelize) => {
  const Pagamento = sequelize.define('pagamento', {
    id_pagamento : {
      type: Sequelize.DOUBLE,
      autoIncrement: true, allowNull: false, primaryKey: true
    },  
    valor: {
      type: Sequelize.STRING, allowNull: false
    }
  });
  return Pagamento;
}



