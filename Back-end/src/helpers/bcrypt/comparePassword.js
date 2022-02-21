const bcrypt = require('bcrypt')

module.exports = (password, passwordFromDB) => {
  const compareResult = bcrypt.compareSync(password, passwordFromDB)
  return compareResult
}