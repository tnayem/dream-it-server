const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const port = process.env.Port || 5000
app.get('/', (req, res) => {
  res.send('Dream it server is running')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})