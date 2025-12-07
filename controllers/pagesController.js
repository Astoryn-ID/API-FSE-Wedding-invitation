// src/controllers/pagesController.js
const pagesService = require('../services/pagesService')

exports.getBySlug = async (req, res, next) => {
  try {
    const slug = req.params.slug
    const page = await pagesService.getPageBySlug(slug)
    if (!page) return res.status(404).json({ message: 'page not found' })
    res.json(page)
  } catch (err) { next(err) }
}

exports.createPage = async (req, res, next) => {
  try {
    const { slug, title, composition, theme } = req.body
    const page = await pagesService.createPage({ slug, title, composition, theme })
    res.status(201).json(page)
  } catch (err) {
    // service can throw a custom error with name/type for controller to map to status
    if (err.name === 'ConflictError') return res.status(409).json({ message: err.message })
    next(err)
  }
}

exports.updatePage = async (req, res, next) => {
  try {
    const id = req.params.id
    const { title, composition, theme, is_published } = req.body
    await pagesService.updatePage(id, { title, composition, theme, is_published })
    res.json({ ok: true })
  } catch (err) { next(err) }
}

exports.publishPage = async (req, res, next) => {
  try {
    const id = req.params.id
    await pagesService.publishPage(id)
    res.json({ ok: true })
  } catch (err) { next(err) }
}

// element CRUD: use services
exports.addElement = async (req, res, next) => {
  try {
    const id = req.params.id
    const { uid, variant, props, position } = req.body
    const item = await pagesService.addElement(id, { uid, variant, props, position })
    res.status(201).json(item)
  } catch (err) { next(err) }
}

exports.updateElement = async (req, res, next) => {
  try {
    const { id, uid } = req.params
    const { props, position, variant } = req.body
    await pagesService.updateElement(id, uid, { props, position, variant })
    res.json({ ok: true })
  } catch (err) { next(err) }
}

exports.deleteElement = async (req, res, next) => {
  try {
    const { id, uid } = req.params
    await pagesService.deleteElement(id, uid)
    res.json({ ok: true })
  } catch (err) { next(err) }
}
