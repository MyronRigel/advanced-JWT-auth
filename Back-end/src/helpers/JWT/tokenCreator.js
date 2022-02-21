const jwt = require('jsonwebtoken')
const {JWT_ACCESS, JWT_REFRESH} = require('../../constants')

module.exports = (payload) => {
  const access_token = jwt.sign(payload, JWT_ACCESS, {expiresIn: "1h"})
  const refresh_token = jwt.sign(payload, JWT_REFRESH, {expiresIn: "30d"})
  return {
    access_token,
    refresh_token
  }
}