// src/routes/index.js
const express = require('express')
const router = express.Router()
const components = require('../routes/components')
const pages = require('../routes/pages')

router.use('/components', components);
router.use('/pages', pages);


router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

module.exports = router
