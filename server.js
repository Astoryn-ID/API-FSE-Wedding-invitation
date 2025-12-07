// src/server.js
const app = require('./app')
const port = process.env.DB_PORT || 8080

const server = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port} (env=${process.env.NODE_ENV})`)
})

// graceful shutdown (optional)
process.on('SIGTERM', () => {
  console.info('SIGTERM received, shutting down')
  server.close(() => process.exit(0))
})
