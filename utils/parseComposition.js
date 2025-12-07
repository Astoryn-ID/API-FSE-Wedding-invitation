// src/utils/parseComposition.js
module.exports = function parseComposition(page) {
  if (!page) return []
  const raw = page.composition_json
  try {
    if (!raw) return []
    if (typeof raw === 'string') {
      const parsed = JSON.parse(raw)
      return parsed.components || []
    }
    if (Array.isArray(raw)) return raw
    if (raw && raw.components) return raw.components
    return []
  } catch (err) {
    return []
  }
}
