const express = require('express')
const api = express()

api.get('/', (req, res) => {
    res.send('Hello World!')
  })

exports.modules.api = api 