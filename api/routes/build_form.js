const express = require("express");

const buildFormController = require("../controllers/build_form");

const router = express.Router();

router.post("/", (req, res) => {
  achadosPerdidosController.create(req, res);
});

module.exports = router;
