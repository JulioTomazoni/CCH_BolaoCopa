module.exports = (sequelize, Sequelize) => {
  const Chaveaposta_times = sequelize.define('chaveaposta_times', {
    id_chaveaposta : {
      type: Sequelize.INTEGER,
      autoIncrement: true, allowNull: false, primaryKey: true
    },  
    times_posicao1: {
      type: Sequelize.STRING, allowNull: true
    },
    times_posicao2: {
      type: Sequelize.STRING, allowNull: true
    },
    times_posicao3: {
      type: Sequelize.STRING, allowNull: true
    },
    times_posicao4: {
      type: Sequelize.STRING, allowNull: true
    },
    times_posicao5: {
      type: Sequelize.STRING, allowNull: true
    },
    times_posicao6: {
      type: Sequelize.STRING, allowNull: true
    }
  });
  return Chaveaposta_times;
}



