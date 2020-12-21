const mongoose = require('mongoose');
const Schema =mongoose.Schema;


//create Todo schema
const TodoSchema = new Schema({
    list:{
        type:Schema.Types.ObjectId,
        ref:'lists'
    },
    marked:{
        type:Boolean,    
    },
    title:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        
    }
});
module.exports = Todos = mongoose.model('todos',TodoSchema );