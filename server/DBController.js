// const fs = require('fs/promises')
const fsSync = require('fs')

const data = require('./urls.json')

class DBController {
  #data
  testParam
  constructor(test) {
    this.testParam = test
    // this.#data = datafile
    // if (!fsSync.existsSync(datafile)) fsSync.writeFileSync(datafile)
  }

  async store(key, value) {
    const parsedData = data
    parsedData[key] = value
    fsSync.writeFileSync('./server/urls.json', JSON.stringify(parsedData))
  }

  getKeyByValue(val) {
    for (const [key, value] of Object.entries(data)) {
      if (value === val) {
        return key
      }
    }
  }

  getValueByKey(key) {
    return data[key]
  }
}

module.exports = DBController
