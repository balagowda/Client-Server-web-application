const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    stud_name:{
        type:String,
        required:"This feild is required"
    },
    email_id:{
        type:String,
    },
    contact:{
        type:String
    },
    class:{
        type:String
    }
});

module.exports = mongoose.model('Student',studentSchema);