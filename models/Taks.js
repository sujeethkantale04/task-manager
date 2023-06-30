const mongoose = require('mongoose')


// Schema is used we'll setup the structure for all the documents that we'll eventually have in our collection
const TaskSchema = new mongoose.Schema({

    name: {
        type:String,
        required:[true,'must provide name'],
        trim: true,
        maxlength:[20,'name cannot be more than 20 characters'],
    },
    completed:{
        type:Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Task',TaskSchema)
