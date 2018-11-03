var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true, // az ertek muszaj letezzen
        minlength: 1, // nem lehet ures sztring
        trim: true // levagja a feherkaraktereket a sztring elejerol es vegerol
    },
    completed: {
        type: Boolean,
        default: false // alapertelmezett erteket allit be
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};