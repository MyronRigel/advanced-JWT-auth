const {UserModel} = require('../../models')
const {hashPassword} = require('../../helpers')

class UsersService {
  async createNewUser(req) {
    const {
      email,
      password,
      firstName,
      lastName,
      role,
    } = req.body

    const hashedPassword = hashPassword(password)

    const user = new UserModel({
      lastName,
      firstName,
      email,
      password: hashedPassword,
      roles: [role],
    })
    const mongoResponse = await user.save()

    return mongoResponse
  }

  async getAllUsers(req) {
    const users = await UserModel.find()

    return users
  }

  async getUserInfo(req) {
    const {
      userId,
    } = req.dataFromToken

    const info = await UserModel.findOne({_id: userId})
    return info
  }
}

module.exports = new UsersService