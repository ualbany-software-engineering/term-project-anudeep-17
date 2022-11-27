const mongoose = require('mongoose');

const profileschema = new mongoose.Schema({
    photo:{
        type : String,
        require: true,
    },
    name:{
        type : String,
        require: true,
    },
    description:{
        type : String,
        require: true,
    },
    username:{
        type: String,
        require: true,
        unique: true,
    }
});

const profilemodel = mongoose.model("userprofiles", profileschema);

module.exports = profilemodel;

