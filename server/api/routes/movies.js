const router = require('express').Router()
const {Movies} = require('../../db/models')

router.get('/', async (req, res, next) => {
  try {
    const movies = await Movies.findAll()
    res.send(movies)
  } catch (error) {
    next(error)
  }
})

module.exports = router
