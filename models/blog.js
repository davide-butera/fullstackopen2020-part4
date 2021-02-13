const mongoose = require('mongoose');
const dotenv = require('dotenv');
const logger = require('../utils/logger');

dotenv.config();

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

const mongoUrl = process.env.MONGODB_URI;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true,
})
  .catch((error) => logger.error(error));

module.exports = mongoose.model('Blog', blogSchema);
