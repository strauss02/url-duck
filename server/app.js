/** ************************* */
const express = require('express')
const app = new express()
const cors = require('cors')
const path = require('path')
const router = express.Router()
const fs = require('fs')
const urls = require('./urls.json')
/** ************************* */
const redirectRouter = require('./redirect-router')

/** *****General Middleware*********** */

app.use(cors())
app.use(express.json())

/** ************************* */
/** ************************* */

/**
 * Static serve public folder
 */
app.use(express.static('public'))

app.use('/*', redirectRouter)

app.post('/', (req, res) => {
  const inputURL = req.body.userURL
  //   const baseURL = window.location.origin
  function getrandom() {
    const randomString =
      Math.random().toString(32).substring(2, 5) +
      Math.random().toString(32).substring(2, 5)
    return randomString
  }
  const randomURL = getrandom()
  //   res.send(req.body['userURL'])
  // store url in db {randomURL : inputURL}

  const toBeUrls = urls
  toBeUrls[randomURL] = inputURL
  console.log(toBeUrls)
  fs.writeFileSync('./server/urls.json', JSON.stringify(toBeUrls))
  res.send(randomURL)
})

// app.get('/*', (req, res) => {
//   //   res.send('aha, I see you are a man of culture as well!')
//   //   res.send(req.url)
//   const hash = req.url.substring(1)
//   // check hash existence in db
//   const entries = Object.entries(urls)
//   // TODO: replace check with simple key check
//   for (const entry of entries) {
//     if (entry[0] === hash) {
//       console.log('hash found! ', entry[0])
//       console.log(entry[1])
//       res.redirect(entry[1])
//       return
//     }
//   }
//   res.send('no short url found! sorry bud')
//   // redirect to hash key
// })

app.listen(process.env.PORT || 3000, () => console.log('Server is running...'))
