const express = require("express");
const morgan = require("morgan");
const port = 3000;

const buildForm = require("./api/routes/build_form");
const setConfig = require("./api/routes/set_formConfig");
const buildFormInfo = require("./api/routes/build_form_info");

const app = express();

// app.listen(port);

app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));

// Endpoints
// ----------------------------------------------------------------
// Set rules for validation
app.use("/form_config", setConfig);

// Create the form
app.use("/build_form", buildForm);

// Associate the Data with the relative Form
// This can be optimized latter adding an exact number of information to be added this way the Endpoint will be called only one time.
app.use("/form_info", buildFormInfo);
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
