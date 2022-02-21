const {tokenCreator} = require('../../helpers')
const {RefreshTokenModel} = require('../../models')

class UsersService {
  async loginUser(req) {
    const {
      _id,
      email,
      firstName,
      lastName,
      roles,
    } = req.user

    const {access_token, refresh_token} = tokenCreator({
      userId: _id,
      email,
      roles,
    })

    const tokenFromDB = await RefreshTokenModel.findOne({userId: _id})

    if (tokenFromDB) {
      await RefreshTokenModel.findOneAndUpdate({userId: _id}, {refresh_token})
    } else {
      await RefreshTokenModel.create({
        userId: _id,
        refresh_token,
      })
    }

    return {
      access_token,
      refresh_token,
      email,
      firstName,
      lastName,
      roles,
    }
  }

  async logoutUser(req) {
    const {
      userId,
    } = req.dataFromToken

    await RefreshTokenModel.findOneAndDelete({userId})

    return 'user logout success'
  }

  async refreshUserToken(req) {
    const {
      userId,
      email,
      roles,
    } = req.tokenFromDb

    const tokens = tokenCreator({
      userId,
      email,
      roles,
    })

    await RefreshTokenModel.findOneAndUpdate({userId}, {refresh_token: tokens.refresh_token})

    return tokens
  }
}

module.exports = new UsersService