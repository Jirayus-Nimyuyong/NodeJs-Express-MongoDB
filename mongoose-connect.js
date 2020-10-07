const mongoose = require('mongoose')
const config = require('config')

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://${config.get('mongodb.host')}/${config.get('mongodb.DB')}`, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    console.log('Connected To The MongoDB.')
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}

module.exports = connectDB
