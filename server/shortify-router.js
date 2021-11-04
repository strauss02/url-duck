const express = require('express')
const app = new express()
const router = express.Router()
const urls = require('./urls.json')
const fs = require('fs')

router.post('/', (req, res) => {
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
module.exports = router
