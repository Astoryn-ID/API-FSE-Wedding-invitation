// src/services/pagesService.js
const { Page } = require('../models')
const { Op } = require('sequelize')
const parseComposition = require('../utils/parseComposition')

class NotFoundError extends Error { constructor(msg){ super(msg); this.name='NotFoundError' } }
class ConflictError extends Error { constructor(msg){ super(msg); this.name='ConflictError' } }

async function getPageBySlug(slug) {
  const page = await Page.findOne({ where: { slug } })
  if (!page) return null
  const components = parseComposition(page)
  return {
    id: page.id,
    slug: page.slug,
    title: page.title,
    components,
    theme: page.theme_json || {},
    is_published: page.is_published,
    published_at: page.published_at
  }
}

async function createPage({ slug, title, composition, theme }) {
  // check slug unique
  const exists = await Page.findOne({ where: { slug } })
  if (exists) throw new ConflictError('slug already exists')
  const composition_json = composition ? { components: composition } : { components: [] }
  const page = await Page.create({ slug, title, composition_json, theme_json: theme || {} })
  return { id: page.id, slug: page.slug }
}

async function updatePage(id, { title, composition, theme, is_published }) {
  const page = await Page.findByPk(id)
  if (!page) throw new NotFoundError('page not found')
  const update = {}
  if (title !== undefined) update.title = title
  if (composition !== undefined) update.composition_json = { components: composition }
  if (theme !== undefined) update.theme_json = theme
  if (is_published !== undefined) update.is_published = is_published
  await page.update(update)
}

async function publishPage(id) {
  const page = await Page.findByPk(id)
  if (!page) throw new NotFoundError('page not found')
  // here you could add revision snapshot or SSR snapshot generation
  await page.update({ is_published: true, published_at: new Date() })
}

async function addElement(pageId, { uid, variant, props, position }) {
  const page = await Page.findByPk(pageId)
  if (!page) throw new NotFoundError('page not found')
  const comps = parseComposition(page)
  const newItem = { uid, variant, props: props || {}, position: typeof position === 'number' ? position : comps.length }
  comps.splice(newItem.position, 0, newItem)
  await page.update({ composition_json: { components: comps } })
  return newItem
}

async function updateElement(pageId, uid, { props, position, variant }) {
  const page = await Page.findByPk(pageId)
  if (!page) throw new NotFoundError('page not found')
  const comps = parseComposition(page)
  const idx = comps.findIndex(c => c.uid === uid)
  if (idx === -1) throw new NotFoundError('element not found')
  if (props !== undefined) comps[idx].props = props
  if (variant !== undefined) comps[idx].variant = variant
  if (typeof position === 'number') {
    const [item] = comps.splice(idx, 1)
    comps.splice(position, 0, { ...item, position })
  }
  await page.update({ composition_json: { components: comps } })
}

async function deleteElement(pageId, uid) {
  const page = await Page.findByPk(pageId)
  if (!page) throw new NotFoundError('page not found')
  const comps = parseComposition(page)
  const idx = comps.findIndex(c => c.uid === uid)
  if (idx === -1) throw new NotFoundError('element not found')
  comps.splice(idx, 1)
  await page.update({ composition_json: { components: comps } })
}

module.exports = {
  getPageBySlug,
  createPage,
  updatePage,
  publishPage,
  addElement,
  updateElement,
  deleteElement,
  NotFoundError,
  ConflictError
}
