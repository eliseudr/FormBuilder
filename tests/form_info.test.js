const request = require("supertest");
const app = require("../app");

const bodyNewFormInfo = {
    opcao: "Na sociedade brasileira a crise...",
    // Id_form should be passes as a parameter.
    id_form: 54
  };
  
  test('Testing POST request /set_formConfig', async () => {
 // Add the data for the form
 let url = `/form_info?nomedb=dbform`;
request(app)
   .post(url)
   .send(bodyNewFormInfo)
   .expect(200);
});