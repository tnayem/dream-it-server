const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const port = process.env.Port || 5000

const courseData = require('./data/courseData.json')
app.get('/', (req, res) => {
  res.send('Dream it server is running')
})
app.get('/courses', (req, res) => {
  res.send(courseData)
})
app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const selectedCourse = courseData.find(course=>course.id === id);
  res.send(selectedCourse)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})