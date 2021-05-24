const express = require("express");
const morgan = require("morgan");
const port = 3000;

const buildForm = require("./api/routes/build_form");
const setConfig = require("./api/routes/set_formConfig");
const validateForm = require("./api/routes/validade_form");

const app = express();

app.listen(
  port,
  () => console.log(`server is runing on http://localhost:${port}`)
);

app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));

// Endpoints
// ----------------------------------------------------------------
// Set rules for validation
app.use("/form_config", setConfig);

// Create the form
app.use("/build_form", buildForm);

// Associate the Data with the Form built
//app.use("/form_questions", buildQuestions);
// ----------------------------------------------------------------

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
