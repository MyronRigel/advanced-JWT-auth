const {userService} = require('../../services')
const ErrorHandler = require('../../Error/ErrorHandler')

class UsersController {
  async createNewUser(req, res, next) {
    try {
      const newUser = await userService.createNewUser(req)
      res.json(newUser)
    } catch (err) {
      next(new ErrorHandler(err.message, 400))
    }
  }

  async getUserInfo(req, res, next) {
    try {
      const info = await userService.getUserInfo(req)
      res.json(info)
    } catch (err) {
      next(new ErrorHandler(err.message, 400))
    }
  }

  async getAllUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers(req)
      res.json(users)
    } catch (err) {
      next(new ErrorHandler(err.message, 400))
    }
  }
}

module.exports = new UsersController