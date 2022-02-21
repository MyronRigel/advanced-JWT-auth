const {Router} = require('express')
const {userRouter} = require('./allRoutes')

const mainRouter = Router()

mainRouter.use('/users', userRouter)

module.exports = mainRouter