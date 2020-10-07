const Book = require('../../../model/book')

const createBook = async (req, res) => {
  try {
    const { code, name } = req.body
    const book = new Book({
      book_code: code,
      book_name: name
    })
    await book.save()
      .then(() => {
        res.status(201).json({
          status: 201,
          message: 'Created Success'
        })
      })
      .catch(error => {
        console.error(error)
        res.status(500).json({
          status: 500,
          message: 'Query Error.'
        })
      })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

const getBook = async (req, res) => {
  try {
    await Book.find()
      .then(response => {
        res.status(200).json(response)
      })
      .catch(error => {
        console.error(error)
        res.status(500).json({
          status: 500,
          message: 'Query Error.'
        })
      })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

const getBookById = async (req, res) => {
  try {
    const { Id } = req.params
    await Book.findById(Id)
      .then(response => {
        res.status(200).json(response)
      })
      .catch(error => {
        console.error(error)
        res.status(500).json({
          status: 500,
          message: 'Query Error.'
        })
      })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

const updateBook = async (req, res) => {
  try {
    const {
      params: { Id },
      body: { code, name }
    } = req
    const bookUpdate = {
      book_code: code,
      book_name: name
    }
    await Book.findByIdAndUpdate(Id, { $set: bookUpdate })
      .then(() => {
        res.status(200).json({
          status: 200,
          message: 'Updated Success'
        })
      })
      .catch(error => {
        console.error(error)
        res.status(500).json({
          status: 500,
          message: 'Query Error.'
        })
      })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

const deletBook = async (req, res) => {
  try {
    const { Id } = req.params
    await Book.findByIdAndRemove(Id)
      .then(() => {
        res.status(200).json({
          status: 200,
          message: 'Deleted Success'
        })
      })
      .catch(error => {
        console.error(error)
        res.status(500).json({
          status: 500,
          message: 'Query Error.'
        })
      })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

module.exports = {
  createBook,
  getBook,
  getBookById,
  updateBook,
  deletBook
}
