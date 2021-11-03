const express = require('express')
const app = new express()
const cors = require('cors')
const path = require('path')

app.use(cors())

app.use('/', express.static(path.resolve('../public')))

app.get('/', (req, res) => {
  res.sendFile(path.resolve('../public/index.html'))
})

app.listen(process.env.PORT || 3000, () => console.log('Server is running...'))
