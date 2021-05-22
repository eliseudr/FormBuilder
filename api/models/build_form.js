const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes, nomeTable = "form") => {
  class BuildForm extends Model {}
  BuildForm.init(
    {
      Text: DataTypes.STRING,
      Email: DataTypes.STRING,
      Data: DataTypes.BOOLEAN,
      lista_suspensa: BOOLEAN,
      multipla_opcao: BOOLEAN,
      created_at: DataTypes.DATE,
      id_pessoa: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: nomeTable,
      timestamps: false,
    }
  );
  return BuildForm;
};
