const {Schema, model} = require('mongoose')

const roleSchema = new Schema({
  role: {
    type: String,
    required: true,
    default: 'USER',
  },
})

module.exports = model('Role', roleSchema)