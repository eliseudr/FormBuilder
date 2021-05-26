const request = require("supertest");
const app = require("../app");

const bodyNewConfig = {
    texto_tam_exato: null,
    texto_tam_minimo: 1,
    texto_tam_maximo: null,
    texto_palavras_min: 5,
    texto_palavras_max: 100,
    email_dominio: "hotmail.com, gmail.com, outlook.com, yahoo.com",
    data_minima: "2021-05-24 23:59",
    data_maxima: "2021-05-30 00:01",
    qtd_respostas_min: 1,
    qtd_respostas_max: 1
  };

  test('Testing POST request /set_formConfig', async () => {

    //Add a new configuration for the form.
    let url = `/form_config?nomedb=dbform`;
    await request(app)
      .post(url)
      .send(bodyNewConfig)
      .expect(200);
  });
  