var mongoose = require('mongoose')

const URI =
  'mongodb+srv://taskapp:ZCsFJM5W4sfjaaD4@cluster0-i1yp3.mongodb.net/test?retryWrites=true&w=majority'

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
