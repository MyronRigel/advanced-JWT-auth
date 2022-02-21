const {Router} = require('express')
const {userController, loginController} = require('../../controllers')
const {
  newUserMiddleware,
  loginUserMiddleware,
  isUserExist,
  isAccessTokenMiddleware,
  roleMiddleware,
  isRefreshTokenMiddleware,
} = require('../../middlewares')
const {ADMIN} = require('../../constants')

const userRouter = Router()

userRouter.post('/login', loginUserMiddleware, isUserExist, loginController.loginUser)
userRouter.post('/logout', isAccessTokenMiddleware, loginController.logoutUser)

userRouter.get('/refresh', isRefreshTokenMiddleware, loginController.refreshUserToken)
userRouter.get('/check', isAccessTokenMiddleware, loginController.checkAccessToken)

userRouter.post('/', newUserMiddleware, userController.createNewUser)

userRouter.get('/getall', roleMiddleware([ADMIN]), userController.getAllUsers)
userRouter.get('/profile', isAccessTokenMiddleware, userController.getUserInfo)

module.exports = userRouter