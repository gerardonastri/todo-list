const mongoose = require('mongoose');

todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Todo', todoSchema)