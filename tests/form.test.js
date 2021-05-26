const request = require("supertest");
const app = require("../app");

 const bodyNewForm = {
  texto: "String sem tamanho maximo.",
  email: "eliseudr@hotmail.com",
  data_minima: "2021-05-24 00:01",
  data_maxima: "2021-05-27 23:59",
  qtd_opcoes_lista_suspensa: 2,
  qtd_respostas_min: 1,
  qtd_respostas_max: 1,
   // Id_form_config should be passes as a parameter.
  id_form_config: 26,
};

 test('Testing POST request /build_form', async () => {
  // Add a new form.
  let url = `/build_form?nomedb=dbform`;
  request(app)
    .post(url)
    .send(bodyNewForm)
    .expect(200);
});
