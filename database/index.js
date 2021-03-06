const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://database:27017/saba', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true,
});

const adventuresSchema = new mongoose.Schema({
  name: String,
  image: String,
  reviews: Number,
  rating: Number,
  price: String,
  liked: Boolean,
  timesBooked: Number,
  subcategory: String,
  overview: String,
});

const Adventures = mongoose.model('Adventures', adventuresSchema);

module.exports = Adventures;
