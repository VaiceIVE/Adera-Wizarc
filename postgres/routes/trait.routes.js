const Router = require('express')
const router = new Router()
const traitController = require('../controllers/trait.controller')

router.post('/trait', traitController.addTrait)
router.delete('/trait/del/', traitController.deleteTrait)
router.post('/teamtrait', traitController.addTeamTrait)
router.delete('/teamtrait/del', traitController.deleteTeamTrait)




module.exports = router
