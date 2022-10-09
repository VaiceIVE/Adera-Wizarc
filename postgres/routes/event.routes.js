const Router = require('express')
const eventController = require('../controllers/event.controller')
const router = new Router()
const teamController = require('../controllers/event.controller')

router.post('/event', eventController.addEvent)
router.post('/event/sign', eventController.signForEvent)
router.get('/event/:id', eventController.getOneEvent)
router.get('/events', eventController.getEvents)
router.get('/eventpic/:id', eventController.getPic)
router.get('/events/t', eventController.getTestEvent)





module.exports = router
