const mongoose = require('mongoose');
const Schema =mongoose.Schema;


//create Lists schema
const ListSchema = new Schema({
    list:[
        {   type:String,
            require:true}
    ]
        
        
      
});
module.exports = Lists = mongoose.model('lists',ListSchema );