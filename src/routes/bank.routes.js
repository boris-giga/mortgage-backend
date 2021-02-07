const express = require('express')
const router = express.Router()
const bankController =   require('../controllers/bank.controller');
// Retrieve all banks
router.get('/', bankController.findAll);
// Create a new bank
router.post('/', bankController.create);
// Update a bank with id
router.put('/:id', bankController.update);
// Delete a bank with id
router.delete('/:id', bankController.delete);
module.exports = router