module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define('usuario', {
    id_usuario : {
      type: Sequelize.INTEGER,
      autoIncrement: true, allowNull: false, primaryKey: true
    },  
    usuario: {
      type: Sequelize.STRING, allowNull: false
    },
    senha: {
      type: Sequelize.STRING, allowNull: false
    },
    admin: {
      type: Sequelize.BOOLEAN, allowNull: true
    }
  });
  return Usuario;
}



