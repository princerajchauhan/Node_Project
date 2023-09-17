
const route = require('express').Router()
const {api, singleData} = require('../Cotroller/apiController')

route.get("/api",api)
route.get("/api/:id",singleData)

module.exports = route