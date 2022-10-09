const Router = require('express')
const router = new Router()
const financeController = require('../controllers/finance.controller')

router.post('/user/cwall', financeController.createWallet)
router.post('/deal/matic', financeController.transactionMatic)
router.post('/deal/ruble', financeController.transactionRuble)
router.get('/market', financeController.getMarket)
router.get('/wallet/:id', financeController.walletStatus)
router.get('/testmarket', financeController.getTestMarket)





module.exports = router