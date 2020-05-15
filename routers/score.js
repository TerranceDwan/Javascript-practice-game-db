const express = require('express')
const router = express.Router()
const Score = require('../models/scoreModel')

router.post('/highScores/:initials/:score', async (req, res) => {
  try {
    const score = new Score({
      initials: req.params.initials,
      score: req.params.score,
    })
    score.save()
    const highScores = await Score.find()
    res.send(highScores)
  } catch (e) {
    res.status(400).send()
  }
})

router.get('/highScores', async (req, res) => {
  try {
    const highScores = await Score.find()
      .sort({ score: -1 })
      .limit(9)
    res.send(highScores)
  } catch (e) {
    res.status(400).send()
  }
})

module.exports = router
