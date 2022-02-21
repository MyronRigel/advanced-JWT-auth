const bcrypt = require('bcrypt')

module.exports = (password) => {
  const hashedPassword = bcrypt.hashSync(password, 8)
  return hashedPassword
}