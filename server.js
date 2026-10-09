// Entry point: starts the Express server
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const identifyRoute = require('./routes/identify')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

// Quick check that the backend is running
app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

// POST /api/identify
app.use('/api', identifyRoute)

app.listen(PORT, () => {
  console.log(`BirdLens backend running on http://localhost:${PORT}`)
})