const ErrorHandler = require('../../Error/ErrorHandler')
const {loginService} = require('../../services')
const {COOKIES_LIFE} = require('../../constants')

class LoginController {
  async loginUser(req, res, next) {
    try {
      const {access_token, refresh_token, ...info} = await loginService.loginUser(req)
      res.cookie('refresh_token', refresh_token, {maxAge: COOKIES_LIFE, httpOnly: true})
      res.json({access_token, ...info})
    } catch (err) {
      next(new ErrorHandler(err.message, 400))
    }
  }

  async logoutUser(req, res, next) {
    try {
      const serviceRes = await loginService.logoutUser(req)
      res.clearCookie('refresh_token')
      res.json(serviceRes)
    } catch (err) {
      next(new ErrorHandler(err.message, 400))
    }
  }

  async refreshUserToken(req, res, next) {
    try {
      const {access_token, refresh_token} = await loginService.refreshUserToken(req)

      res.cookie('refresh_token', refresh_token, {maxAge: COOKIES_LIFE, httpOnly: true})
      res.json({access_token})
    } catch (err) {
      next(new ErrorHandler(err.message, 400))
    }
  }

  async checkAccessToken(req, res, next) {
    try {
      res.json(true)
    } catch (err) {
      next(new ErrorHandler(err.message, 400))
    }
  }
}

module.exports = new LoginController