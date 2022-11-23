const express = require ("express")
const app= express()
const mongoose = require ('mongoose')
const userModel=require('./models/profiles')
const User=require('./models/users')
const cors=require('cors')
const AuthRoute = require("./auth")
const mongoid = require('mongodb').ObjectId;

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://AK7761:Chilkur%402002@assingment518.bakotxi.mongodb.net/profiles?retryWrites=true&w=majority");

app.get("/getprofile",(req, res)=>{
userModel.find({}, (err,result)=>{
    if(err){
        res.json(err);
    }
    else{
        res.json(result);
    }
});
});

app.post("/createuser", async (req,res)=>{
    const user = req.body
    const newuser=new userModel(user);
    await newuser.save();
    res.json(user);
    console.log(user);
});

app.use("/auth", AuthRoute) 

app.post("/edit", (req, res) =>{
    const user = req.body
    const id = user._id
    db.collection("userprofiles").updateOne({"_id":mongoid(id)}, {$set:item}, function(err, result){
        if(err)
        {
            res.json(err)
        }
    })
} )




app.listen(3005, ()=>{
    console.log("server running");
})