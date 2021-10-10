const Router = require('express')
const router = Router.Router()
const controller = require('../controllers/index')
const tokenMiddleware = require('../middlware/token')

router.post('/auth', controller.Auth)
router.post('/register', controller.Register)
router.post('/blogCreate',tokenMiddleware, controller.blogCreate)
router.get('/blogGet',tokenMiddleware, controller.blogGet),
router.post('/blogPatch',tokenMiddleware, controller.blogPatch)

module.exports = router