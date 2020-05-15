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
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.listen(port, () => {
  console.log('Server is up on server ' + port)
})
