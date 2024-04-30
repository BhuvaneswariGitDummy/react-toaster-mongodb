const express = require('express')
const controller = require('../controller/userController')

const route=express.Router();

route.post('/create',controller.create)
route.get('/getall',controller.getAll)
route.get('/getone/:id',controller.getOne)
route.put('/update/:id',controller.update)
route.delete('/delete/:id',controller.deleteUser)

module.exports = route;