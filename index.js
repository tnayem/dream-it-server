const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const port = process.env.Port || 5000

const courseData = require('./data/courseData.json')
app.get('/', (req, res) => {
  res.send('Dream it server is running')
})
app.get('/course-data', (req, res) => {
  res.send(courseData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})