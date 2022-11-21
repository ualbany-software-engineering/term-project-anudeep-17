const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
   email: {
    type: String,
    require: true,
    unique: true,
   },
   passowrd:{
    type: String,
    required:true,
    unique: false,
   }
});

const usermodel = mongoose.model("users", userschema);

module.exports = usermodel;

