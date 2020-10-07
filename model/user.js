const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  code: {
    type: String
  },
  name: {
    type: String
  },
  password: {
    type: String
  },
  type: {
    type: Number
  },
  mobile_phone_no: {
    type: String
  },
  email: {
    type: String
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
