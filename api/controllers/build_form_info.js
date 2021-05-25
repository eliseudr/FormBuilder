const { Sequelize, DataTypes } = require("sequelize");
const BuildFormInfo = require("../models/build_form_info");
const helpers = require("../helpers/helpers");

module.exports = {
  async create(req, res) {
    var sequelize = helpers.getSequelize(req.query.nomedb);

    //  // Checks the word count if it's more or less the set in the config
    // let qtdPalavras = helpers.countWords(req.body.texto);
    // if(config.texto_palavras_min > qtdPalavras){
    //   res.status(400).send(`The amount of words is less then needed: '${config.texto_palavras_min}'`);
    // }else if(config.texto_palavras_max < qtdPalavras){
    //   res.status(400).send(`The amount of words is more then needed: '${config.texto_palavras_max}'`);
    // }

    try {
      await BuildFormInfo(
        sequelize,
        Sequelize.DataTypes,
      ).create({
        // ID auto generated
        // Validates the the column 'opcao = texto', according to it's configuration.
        opcao: req.body.opcao,
        id_form: req.body.id_form,
      });
      res.status(200).send('Form information was added and associated correctly...');
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: error });
    }
    sequelize.close();
  },
};
