const jwt = require('jsonwebtoken')
const ErrorHandler = require('../../Error/ErrorHandler')
const {JWT_REFRESH} = require('../../constants')
const {RefreshTokenModel} = require('../../models')

const isAccessToken = async (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
    const refresh_token = req.cookies['refresh_token']
    if (!refresh_token) {
      return next(new ErrorHandler('no refresh token in cookies', 403))
    }
    const {userId} = jwt.verify(refresh_token, JWT_REFRESH)

    const tokenFromDb = await RefreshTokenModel.findOne({userId})
    if (!tokenFromDb) {
      return next(new ErrorHandler('no refresh token in DataBase', 403))
    }

    req.tokenFromDb = tokenFromDb
  } catch (err) {
    return next(new ErrorHandler(err.message, 400))
  }

  next()
}

module.exports = isAccessToken