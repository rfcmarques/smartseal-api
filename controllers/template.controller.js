const getTemplates = (req, res) => {
  res.status(200).send("Get all templates");
};

const getTemplateById = (req, res) => {
  res.status(200).send("Get template by ID");
};

const createTemplate = (req, res) => {
  res.status(201).send("Create a new template");
};

module.exports = { getTemplates, getTemplateById, createTemplate };
