const express = require('express')
const fs=require('fs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.setHeader('Content-type','text/html')
  const data=fs.readFileSync("index.html")
  res.send(data.toString())
})

app.get('/about', (req, res) => {
    res.send('Hello About')
})
app.get('/contact', (req, res) => {
    res.send('Hello Contact')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})