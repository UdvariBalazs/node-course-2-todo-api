var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
console.log('------------- process.env.MONGODB_URI = ', process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI/* || 'mongodb://localhost:27017/TodoApp'*/), { useNewUrlParser: true };
// Bongeszobol inditas: https://intense-stream-62044.herokuapp.com/

module.exports = {mongoose};