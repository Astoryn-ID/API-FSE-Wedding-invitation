// src/app.js
const express = require('express')
const routes = require('./routes')
const { errorHandler } = require('./middlewares/errorHandler')
const { notFound } = require('./middlewares/notFound')
const requestLogger = require('./middlewares/requestLogger') // optional

const app = express()

// core middlewares
app.use(express.json({ limit: '2mb' }))
app.use(express.urlencoded({ extended: true }))

// optional request logger for dev
if (process.env.NODE_ENV !== 'production') app.use(requestLogger)

// mount API routes
app.use('/api', routes)

// 404 handler
app.use(notFound)

// centralized error handler
app.use(errorHandler)

module.exports = app
