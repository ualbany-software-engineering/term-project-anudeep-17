const mongoose = require('mongoose');

const profileschema = new mongoose.Schema({
    photo:{
        type : String,
    },
    name:{
        type : String,
    },
    description:{
        type : String,
    },
});

const profilemodel = mongoose.model("userprofiles", profileschema);

module.exports = profilemodel;

