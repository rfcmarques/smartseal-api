const express = require("express");
const router = express.Router();
const {
  getContracts,
  getContractById,
  createContract,
} = require("../controllers/contract.controller");

router.get("/", getContracts);
router.get("/:id", getContractById);
router.post("", createContract);
// router.put('/:id');
// router.delete('/:id');

module.exports = router;
