// src/middlewares/errorHandler.js
function errorHandler(err, req, res, next) {
  console.error(err)
  // custom error mapping
  if (err.name === 'NotFoundError') return res.status(404).json({ message: err.message })
  if (err.name === 'ConflictError') return res.status(409).json({ message: err.message })
  // validation? Sequelize errors?
  if (err.name === 'SequelizeUniqueConstraintError') return res.status(409).json({ message: 'duplicate' })
  res.status(err.status || 500).json({ message: err.message || 'internal error' })
}
module.exports = { errorHandler }
