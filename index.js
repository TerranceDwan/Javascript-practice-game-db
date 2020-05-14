const express = require('express')
require('./db/mongoose')
const router = require('./routers/score')

const app = express()
const port = 3001

app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log('Server is up on server ' + port)
})
