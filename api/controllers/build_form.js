const { Sequelize } = require("sequelize");
const fs = require("fs");

const BuildForm = require("../models/build_form");
const errorHelpers = require("../helpers/error_helpers");

module.exports = {
    async create(req, res) {
        let sequelize = helpers.getSequelize(req.query.nomedb);
        try {
          const buildForm = await BuildForm(
            sequelize,
            Sequelize.DataTypes
          ).create({
            texto: req.body.texto,
            email: req.body.email,
            data_minima: req.body.data_minima,
            data_maxima: req.body.data_maxima,
            qtd_opcoes_lista_suspensa: req.body.qtd_opcoes_lista_suspensa,
            qtd_respostas_min: req.body.qtd_respostas_min,
            qtd_respostas_max: req.body.qtd_respostas_max,
            // id_usuario: req.body.id_usuario,
          });
          // Use `helpers` to extrect all mesages.
          res.status(200).send('Form created');
        } catch (error) {
          console.log(error);
          res.status(500).send({ error: error });
        } finally {
          sequelize.close();
        }
    },
}
