// src/routes/components.js
const express = require('express')
const router = express.Router()
const componentsController = require('../controllers/componentsController')

// GET /api/components
router.get('/', componentsController.listVariants)

module.exports = router
