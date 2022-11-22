const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
   username:{
      type : String,
   },
   password:{
      type : String,
   },
});

const usermodel = mongoose.model("users", userschema);

module.exports = usermodel;

