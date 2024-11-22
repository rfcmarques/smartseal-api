const getContracts = (req, res) => {
  res.status(200).send("Get all contracts");
};

const getContractById = (req, res) => {
  res.status(200).send("Get contract by ID");
};

const createContract = (req, res) => {
  res.status(201).send("Create a new contract");
};

module.exports = { getContracts, getContractById, createContract };
