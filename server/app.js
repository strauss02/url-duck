const express = require('express')
const app = new express()
const cors = require('cors')
const path = require('path')
const router = express.Router()

app.use(cors())
app.use(express.json())
// app.use('/', express.static(path.resolve('../public')))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve('./public/index.html'))
// })

app.use(express.static('public'))

app.post('/', (req, res) => {
  const inputURL = req.body['userURL']
  //   const baseURL = window.location.origin
  function getrandom() {
    const random_string =
      Math.random().toString(32).substring(2, 5) +
      Math.random().toString(32).substring(2, 5)
    return random_string
  }
  const randomURL = getrandom()
  //   res.send(req.body['userURL'])
  //store url in db {randomURL : inputURL}
  res.send(randomURL)
})

app.get('/*', (req, res) => {
  res.send('aha, I see you are a man of culture as well!')
  //   res.send(req.url)
  //check hash existence in db
  //redirect to hash key
})

app.listen(process.env.PORT || 3000, () => console.log('Server is running...'))
