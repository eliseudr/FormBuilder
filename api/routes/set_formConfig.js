const express = require("express"); 
const setFormConfig = require("../controllers/set_formConfig");

const router = express.Router();

router.post("/", (req, res) => {
  setFormConfig.create(req, res);
});

module.exports = router;
