/* ============================== */

// const app = new express()
const express = require('express')
const router = express.Router()
const urls = require('./urls.json')

/* ============================== */

router.get('/*', (req, res) => {
  const hash = req.url.substring(1)
  // check hash existence in db
  const entries = Object.entries(urls)
  // TODO: replace check with simple key check
  console.log('hash is: ', hash)
  for (const entry of entries) {
    if (entry[0] === hash) {
      console.log('hash found! ', entry[0])
      console.log(entry[1])
      res.redirect(entry[1])
      return
    }
  }
  res.send('no short url found! sorry bud')
})

module.exports = router
