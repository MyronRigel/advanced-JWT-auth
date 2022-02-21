const jwt = require('jsonwebtoken')
const ErrorHandler = require('../../Error/ErrorHandler')
const {JWT_ACCESS} = require('../../constants')

const isAccessToken = async (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      return next(new ErrorHandler('no token', 401))
    }

    const decodedData = jwt.verify(token, JWT_ACCESS)
    req.dataFromToken = decodedData
  } catch (err) {
    return next(new ErrorHandler(err.message, 401))
  }

  next()
}

module.exports = isAccessToken