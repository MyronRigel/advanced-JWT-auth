const {Schema, model} = require('mongoose')

const refreshTokenSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  refresh_token: {
    type: String,
    required: true,
  },
})

module.exports = model('Refresh', refreshTokenSchema, process.env.REFRESH_TOKEN_COLLECTION)