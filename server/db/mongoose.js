/**
 * Created by raj on 7/14/2017.
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017/');
module.exports = {
  mongoose
}
