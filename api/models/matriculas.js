'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    static associate(models) {
      Matriculas.belongsTo(models.Pessoas);
      Matriculas.belongsTo(models.Turmas);
    }
  }

  Matriculas.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Matriculas',
  });
  
  return Matriculas;
};