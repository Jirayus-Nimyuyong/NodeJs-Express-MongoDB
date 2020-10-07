const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  book_code: {
    type: String
  },
  book_name: {
    type: String
  }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
