const mongoose = require('mongoose')

const scoreSchema = new mongoose.Schema({
  initials: {
    type: String,
    required: true,
    default: 'AAA',
  },
  score: {
    type: Number,
    required: true,
  },
})

const Score = mongoose.model('score', scoreSchema)

module.exports = Score
