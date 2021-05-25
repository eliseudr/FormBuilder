const { Sequelize, DataTypes } = require("sequelize");
const FormConfig = require("../models/formConfig");
const helpers = require("../helpers/helpers");

module.exports = {
  async create(req, res) {
    var sequelize = helpers.getSequelize(req.query.nomedb);

    try {
      await FormConfig(
        sequelize,
        Sequelize.DataTypes,
      ).create({
        texto_tam_exato: req.body.texto_tam_exato,
        texto_tam_minimo: req.body.texto_tam_minimo,
        texto_tam_maximo: req.body.texto_tam_maximo,
        texto_palavras_min: req.body.texto_palavras_min,
        texto_palavras_max: req.body.texto_palavras_max,
        email_dominio: req.body.email_dominio,
        data_minima: req.body.data_minima,
        data_maxima: req.body.data_maxima,
        qtd_respostas_min: req.body.qtd_respostas_min, 
        qtd_respostas_max: req.body.qtd_respostas_max, 
      });
      // Use `helpers` to extrect all mesages.
      res.status(200).send('Rules for validation were set!');
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: error });
    }
    sequelize.close();
  },
};
