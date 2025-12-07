// src/services/componentsService.js
const { ComponentVariant, Component } = require('../models')

/**
 * Return all component variants with parent component meta
 */
async function getAllVariants() {
  const variants = await ComponentVariant.findAll({
    include: [{ model: Component, as: 'component', attributes: ['key','display_name','category','schema_json'] }],
    order: [['component_type','ASC'], ['variant_key','ASC']]
  })
  // you can map/shape result here if you want to hide internal fields
  return variants
}

module.exports = {
  getAllVariants
}
