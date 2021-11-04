const express = require('express')
const app = new express()
const router = express.Router()
const urls = require('./urls.json')

router.get('/*', (req, res) => {
  //   res.send('aha, I see you are a man of culture as well!')
  //   res.send(req.url)
  const hash = req.baseUrl.substring(1)
  // check hash existence in db
  const entries = Object.entries(urls)
  // TODO: replace check with simple key check
  console.log('hash is: ', hash)
  for (const entry of entries) {
    // console.log(entry[0])
    if (entry[0] === hash) {
      console.log('hash found! ', entry[0])
      console.log(entry[1])
      res.redirect(entry[1])
      return
    }
  }
  res.send('no short url found! sorry bud')
  // redirect to hash key
})

module.exports = router
