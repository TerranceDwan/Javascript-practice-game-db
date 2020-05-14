var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/HighScores', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
