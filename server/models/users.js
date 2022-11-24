const mongoose = require('mongoose');
const Joi = require('joi');

const userschema = new mongoose.Schema({
   username:{
      type : String,
      // require:true,
      // unique:true,
   },
   password:{
      type : String,
      // require:true,
      // unique: false,
   },
});

const usermodel = mongoose.model("users", userschema);

module.exports = usermodel;

