const jwt = require('jsonwebtoken')
const ErrorHandler = require('../../Error/ErrorHandler')
const {JWT_ACCESS} = require('../../constants')

const roleMiddleware = (roles) => {
  return (req, res, next) => {
    if (req.method === 'OPTIONS') {
      return next()
    }

    if (!roles || !roles.length) {
      return next(new ErrorHandler('no role in middleware', 400))
    }

    try {
      const token = req.headers.authorization?.split(' ')[1]
      if (!token) {
        return next(new ErrorHandler('no token', 401))
      }

      const {roles: rolesFromToken} = jwt.verify(token, JWT_ACCESS)

      if (!rolesFromToken) {
        return next(new ErrorHandler('no role', 400))
      }

      rolesFromToken.forEach(role => {
        if (!roles.includes(role)) {
          return next(new ErrorHandler('no access', 400))
        }
      })


    } catch (err) {
      return next(new ErrorHandler(err.message, 400))
    }

    next()
  }
}

module.exports = roleMiddleware