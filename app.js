const app = require('express')();
const port = 3000;

app.listen(
    port,
    () => console.log(`server is runing on http://localhost:${port}`)
);

// Endpoints
const buildForm = require("./api/routes/build_form");
const validadeForm = require("./api/routes/validade_form");

// Trata o erro 404 de endpoint não encontrado.
 app.use((req, res, next) => {
    const error = Error(strings.errorNotFound);
    error.status = 404;
    next(error);
  });

// Todos os outros erros são passados para aqui e designados como erro interno do servidor (500).
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: error.message,
    });
  });

module.exports = app;
