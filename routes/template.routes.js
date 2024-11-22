const express = require("express");
const router = express.Router();
const {
  getTemplates,
  getTemplateById,
  createTemplate,
} = require("../controllers/template.controller");

router.get("/", getTemplates);
router.get("/:id", getTemplateById);
router.post("", createTemplate);

module.exports = router;
