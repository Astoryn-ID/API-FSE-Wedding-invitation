// src/controllers/componentsController.js
const componentsService = require('../services/componentsService')

/**
 * GET /api/components
 */
exports.listVariants = async (req, res, next) => {
  try {
    const variants = await componentsService.getAllVariants()
    res.json(variants)
  } catch (err) {
    next(err)
  }
}
