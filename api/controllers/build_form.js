const { Sequelize, DataTypes } = require("sequelize");
const BuildForm = require("../models/build_form");
const helpers = require("../helpers/helpers");

module.exports = {
  async create(req, res) {
    var sequelize = helpers.getSequelize(req.query.nomedb);

    try {
      await BuildForm(
        sequelize,
        Sequelize.DataTypes,
      ).create({
        texto: req.body.texto,
        email: req.body.email,
        data_minima: req.body.data_minima,
        data_maxima: req.body.data_maxima,
        qtd_opcoes_lista_suspensa: req.body.qtd_opcoes_lista_suspensa,
        qtd_respostas_min: req.body.qtd_respostas_min,
        qtd_respostas_max: req.body.qtd_respostas_max,
        id_form_config: req.body.id_form_config,
        // id_usuario: req.body.id_usuario,
      });

      // After created the form if it has more then one question it will create the form at "forms" 
      // and associate it's Id with the Table "form_opcoes" wich will contain it's questions

      if(req.body.qtd_opcoes_lista_suspensa > 1 ) {
        console.log('This form has multiples questions...')
        // Waiting data for another endpoint /build_questions ?
      }

      // Use `helpers` to extrect all mesages.
      res.status(200).send('Form created succesefully...');
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: error });
    }
    sequelize.close();
  },
};
