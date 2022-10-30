module.exports = (sequelize, Sequelize) => {
  const Aposta = sequelize.define('aposta', {
    id_aposta : {
      type: Sequelize.INTEGER,
      autoIncrement: true, allowNull: false, primaryKey: true
    }
  });
  return Aposta;
}



