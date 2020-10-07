const User = require('../../../model/user')

const createUser = async (req, res) => {
  try {
    const {
      code,
      name,
      password,
      type,
      mobilePhone,
      email
    } = req.body

    const user = new User({
      code,
      name,
      password,
      type,
      mobilePhone,
      email
    })
    await user.save()
    res.status(201).json({
      status: 201,
      message: 'Created Success'
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

const getUser = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

const getUserById = async (req, res) => {
  try {
    const { Id } = req.params
    const user = await User.findById(Id)
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

const updateUser = async (req, res) => {
  try {
    const {
      params: { Id },
      body: {
        code,
        name,
        password,
        type,
        mobilePhone,
        email
      }
    } = req
    const userUpdate = {
      code: code,
      name: name,
      password: password,
      type: type,
      mobilePhone: mobilePhone,
      email: email
    }
    await User.findByIdAndUpdate(Id, { $set: userUpdate })
    res.status(200).json({
      status: 200,
      message: 'Updated Success'
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

const deleteUser = async (req, res) => {
  try {
    const { Id } = req.params
    await User.findByIdAndRemove(Id)
    res.status(200).json({
      status: 200,
      message: 'Deleted Success'
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
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser
}
