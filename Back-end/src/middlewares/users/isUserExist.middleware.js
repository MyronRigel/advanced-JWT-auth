const {UserModel} = require('../../models')
const ErrorHandler = require('../../Error/ErrorHandler')
const {comparePassword} = require('../../helpers')

const newUserMiddleware = async (req, res, next) => {
  const {
    email,
    password
  } = req.body

  const user = await UserModel.findOne({email})
  if (!user) {
    return next(new ErrorHandler('user with this email dont exist', 400))
  }

  const compareResult = comparePassword(password, user.password)

  if (!compareResult) {
    return next(new ErrorHandler('wrong password', 400))
  }
  req.user = user

  next()
}

module.exports = newUserMiddleware