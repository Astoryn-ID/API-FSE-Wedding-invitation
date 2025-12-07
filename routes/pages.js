// src/routes/pages.js
const express = require('express')
const router = express.Router()
const pagesController = require('../controllers/pagesController')

// GET /api/pages/:slug
router.get('/:slug', pagesController.getBySlug)

// POST /api/pages
router.post('/', pagesController.createPage)

// PUT /api/pages/:id
router.put('/:id', pagesController.updatePage)

// POST /api/pages/:id/publish
router.post('/:id/publish', pagesController.publishPage)

// elements
router.post('/:id/elements', pagesController.addElement)
router.put('/:id/elements/:uid', pagesController.updateElement)
router.delete('/:id/elements/:uid', pagesController.deleteElement)

module.exports = router
