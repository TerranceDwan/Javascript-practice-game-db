const express = require('express')
require('./db/mongoose')
const router = require('./routers/score')
const connectDB = require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000

connectDB()

app.use(express.json())
app.use(router)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000/')
  next()
})

app.listen(port, () => {
  console.log('Server is up on server ' + port)
})
