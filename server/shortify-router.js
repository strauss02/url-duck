/* ============================== */

const express = require('express')
// const app = new express()
const router = express.Router()
const urls = require('./urls.json')
const fs = require('fs')

/* ==============================  

  This router is for processing POST requests.
  It takes the user-given URL and generates a hash 
  that will correspond to it.
  The {hash : URL} pair is stored in a DB.

   ============================== */

router.post('/', (req, res) => {
  const inputURL = req.body.userURL

  function getrandom() {
    const randomString =
      Math.random().toString(32).substring(2, 5) +
      Math.random().toString(32).substring(2, 5)
    return randomString
  }
  const randomURL = getrandom()

  const toBeUrls = urls
  toBeUrls[randomURL] = inputURL
  fs.writeFileSync('./server/urls.json', JSON.stringify(toBeUrls))
  res.send(randomURL)
})

/* ============================== */

module.exports = router
