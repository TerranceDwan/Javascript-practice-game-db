var mongoose = require('mongoose')

const URI = process.env.MONGODB_URL
const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  console.log('DB connected')
}

module.exports = connectDB
