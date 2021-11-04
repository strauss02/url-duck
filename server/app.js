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
const shortifyRouter = require('./shortify-router')

/** ***** General Middleware *********** */

app.use(cors())
app.use(express.json())

/** ****** Routing ************ */

app.use(express.static('public'))

app.use('/', redirectRouter)

app.post('/', shortifyRouter)

/** ************************* */

app.listen(process.env.PORT || 3000, () => console.log('Server is running...'))
