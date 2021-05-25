const { Sequelize, DataTypes } = require("sequelize");
const BuildForm = require("../models/build_form");
const FormConfig = require("../models/formConfig");
const helpers = require("../helpers/helpers");
const moment = require("moment");

/**
 * Return the configuration set for this form
 * 
 * @param {integer} id_form_config
 * @private 
 */
async function getFormConfig_(id, sequelize){
  const config = await FormConfig(
    sequelize,
    Sequelize.DataTypes,
    'form_config'
  ).findOne({ 
    where: { 
      id: id
    },
  });
  return config;
}

// funcion wich validates the request body
async function validateForm(config, req, res) {
   // Checks the text, only accepts the same size as set on the config
   if(config.texto_tam_exato !== null && config.texto_tam_exato != req.body.texto.length) {
    res.status(400).send('Text size is wrong');
  }
  // Checks for the minimum size of the text input
  else if (config.texto_tam_minimo !== null && config.texto_tam_minimo > req.body.texto.length) {
    res.status(400).send('Text size is too small');
  }
  // Checks for the maximum size of the text input
  else if (config.texto_tam_maximo !== null && config.texto_tam_maximo < req.body.texto.length) {
    res.status(400).send('Text size is too long');
  }
  // Checks the email adresse
  let validEmails = config.email_dominio;
  let dominio = await helpers.getDominio(req.body.email);
  if(!validEmails.includes(dominio)) {
    res.status(400).send('This e-mail is not accepted by this form');
  }
  // Checks the data 
  let dataConfigMin = moment(config.data_minima).format('DD/MM/YYYY');
  let dataConfigMax = moment(config.data_maxima).format('DD/MM/YYYY');
  let dataRequest = moment(req.body.data_minima).format('DD/MM/YYYY');
  if( dataConfigMin > dataRequest) {
    res.status(400).send('This date is before the proposal');
  }
  if( dataConfigMax < dataRequest) {
    res.status(400).send('This date is after the proposal');
  }
  // Checks the amount of answers allowed
  if(config.texto_tam_minimo !== null && config.qtd_respostas_min < req.body.qtd_respostas_min) {
    res.status(400).send('The amount of answers is lower then expected');
  }else if(config.texto_tam_minimo !== null && config.qtd_respostas_max > req.body.qtd_respostas_max){
    res.status(400).send('The amount of answers is heigher than expected');
  }
}

module.exports = {
  async create(req, res) {
    var sequelize = helpers.getSequelize(req.query.nomedb);
    const config = await getFormConfig_(req.body.id_form_config, sequelize);
    try{
      await validateForm(config, req, res);

    // // Checks the word count if it's more or less the set in the config
    // let qtdPalavras = helpers.countWords(req.body.texto);
    // if(config.texto_palavras_min > qtdPalavras){
    //   res.status(400).send(`The amount of words is less then needed: '${config.texto_palavras_min}'`);
    // }else if(config.texto_palavras_max < qtdPalavras){
    //   res.status(400).send(`The amount of words is more then needed: '${config.texto_palavras_max}'`);
    // }
    
    await BuildForm(
      sequelize,
      Sequelize.DataTypes,
    ).create({
      texto: req.body.texto,
      // Validates the the column 'email', according to it's configuration.
      email: req.body.email,
      // Validates the the column 'data_minima', according to it's configuration.
      data_minima: req.body.data_minima,
      // Validates the the column 'data_maxima, according to it's configuration.
      data_maxima: req.body.data_maxima,
      // Validates the the column 'qtd_opcoes_lista_suspensa', according to it's configuration.
      qtd_opcoes_lista_suspensa: req.body.qtd_opcoes_lista_suspensa,
      // Validates the the column 'qtd_respostas_min', according to it's configuration.
      qtd_respostas_min: req.body.qtd_respostas_min,
      // Validates the the column 'qtd_respostas_max', according to it's configuration.
      qtd_respostas_max: req.body.qtd_respostas_max,
      id_form_config: req.body.id_form_config,
      // id_usuario: req.body.id_usuario (USER WHO INSERT THIS FORM),
    });
      // Next step is to POST all the info about this Form
      // Use `helpers` to extrect all mesages.
      res.status(200).send(`Form created succesefully...`);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: error });
    }
    sequelize.close();
  },
};
