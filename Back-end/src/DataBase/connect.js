const { connect } = require('mongoose')
const ErrorHandler = require('../Error/ErrorHandler')

const connectToMongoDB = async () => {
  try {
    await connect(process.env.mongoDB_URL)
    console.log('MongoDB connected')
  } catch (err) {
    new ErrorHandler(err.message, 500)
  }
}

module.exports = connectToMongoDB