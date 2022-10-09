const Router = require('express')
const router = new Router()
const teamController = require('../controllers/team.controller')

router.post('/team', teamController.createTeam)
router.post('/team/del/:id', teamController.deleteTeam)




module.exports = router