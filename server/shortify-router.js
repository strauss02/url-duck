/* ============================== */

const express = require('express')
// const app = new express()
const router = express.Router()
const urls = require('./urls.json')
const fs = require('fs')
const ApiError = require('./ApiError')
/* ==============================  

  This router is for processing POST requests.
  It takes the user-given URL and generates a hash 
  that will correspond to it.
  The {hash : URL} pair is stored in a DB.

   ============================== */

router.post('/', (req, res) => {
  const inputURL = req.body.userURL

  // ASSERT NOT SHORTENED BEFORE
  const toBeUrls = urls
  for (const [key, value] of Object.entries(toBeUrls)) {
    if (value === inputURL) {
      res.send(key)
      return
    }
  }

  // ASSERT PROPER URL
  function isValidUrl(string) {
    let url
    try {
      url = new URL(string)
    } catch (_) {
      return false
    }
    return url.protocol === 'http:' || url.protocol === 'https:'
  }

  if (!isValidUrl(inputURL)) {
    throw new ApiError(400, 'That URL is invalid.')
  }

  function getrandom() {
    const randomString =
      Math.random().toString(32).substring(2, 5) +
      Math.random().toString(32).substring(2, 5)
    return randomString
  }
  const randomURL = getrandom()

  toBeUrls[randomURL] = inputURL
  fs.writeFileSync('./server/urls.json', JSON.stringify(toBeUrls))
  res.send(randomURL)
})

/* ============================== */

module.exports = router
