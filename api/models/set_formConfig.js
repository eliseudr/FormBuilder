"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes, nomeTable = "form_config") => {
  class SetFormConfig extends Model {}
  SetFormConfig.init(
    {
      texto_tam_exato: DataTypes.INTEGER,
      texto_tam_minimo: DataTypes.INTEGER,
      texto_tam_maximo: DataTypes.INTEGER,
      texto_palavras_min: DataTypes.INTEGER,
      texto_palavras_maximo: DataTypes.INTEGER,
      email_dominio: DataTypes.STRING,
      data_minima: DataTypes.DATE,
      data_maxima: DataTypes.DATE,
      qtd_respostas_min: DataTypes.INTEGER, 
      qtd_respostas_max: DataTypes.INTEGER, 
    },
    {
      freezeTableName: true,
      sequelize,
      modelName: nomeTable,
      timestamps: false,
    }
  );
  return SetFormConfig;
};