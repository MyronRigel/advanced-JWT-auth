const {loginUserValidator} = require('../../validators')
const ErrorHandler = require('../../Error/ErrorHandler')

const newUserMiddleware = async (req, res, next) => {
  const {error} = loginUserValidator.validate(req.body)
  if (error) {
    return next(new ErrorHandler(error.details[0].message, 400))
  }

  next()
}

module.exports = newUserMiddleware