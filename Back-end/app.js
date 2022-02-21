const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const {urlencoded, json} = require('express')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const mainRouter = require('./src/routes')
const {connectToMongoDB} = require('./src/DataBase')

const PORT = process.env.PORT

const app = express()

app.use(cors({
  credentials: true,
  origin: process.env.FRONT_END_URL
}))

app.use(helmet())
app.use(morgan('dev'))

app.use(cookieParser())
app.use(urlencoded({extended: true}))

app.use(json())

app.use('/api', mainRouter)

app.use('*', (err, req, res, next) => {
  res.status(err.status).json({
    message: err.message,
    status: err.status,
  })
})

process.on('unhandledRejection', reason => {
  console.log(reason)
  process.exit(0)
})

const start = async () => {
  await connectToMongoDB()
  app.listen(PORT, err => err ? console.log(err) : console.log(`Server listen port ${PORT}`))
}

start()



