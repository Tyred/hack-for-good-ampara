const { Router } = require('express')

const VolunteerController = require('./app/controllers/VolunteerController')
const VolunteerVerifyController = require('./app/controllers/VolunteerVerifyController')

const routes = new Router()

routes.post('/volunteer', VolunteerController.store)

routes.post('/volunteer/signIn', VolunteerController.login)

routes.get('/verify/volunteer', VolunteerVerifyController.index)

module.exports = routes
