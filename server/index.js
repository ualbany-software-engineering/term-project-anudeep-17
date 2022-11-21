const express = require ("express")
const app= express()
const mongoose = require ('mongoose')
const userModel=require('./models/profiles')
const User=require('./models/users')
const cors=require('cors')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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


app.get("/getauth/:email/:password",(request, response)=>{
    
    let email = request.params.email;
    let password = request.params.password;

    User.findOne({ email: email})
    .then((user) => {
        // compare the password entered and the hashed password found
        bcrypt
          .compare(password, user.password)
  
          // if the passwords match
          .then((passwordCheck) => {
  
            // check if password matches
            if(!passwordCheck) {
              return response.status(400).send({
                message: "Passwords does not match",
                error,
              });
            }
  
            //   create JWT token
            const token = jwt.sign(
              {
                userId: user._id,
                userEmail: user.email,
              },
              "RANDOM-TOKEN",
              { expiresIn: "24h" }
            );
  
            //   return success response
            response.status(200).send({
              message: "Login Successful",
              email: user.email,
              token,
            });
          })
          // catch error if password does not match
          .catch((error) => {
            response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          });
      })
      // catch error if email does not exist
      .catch((e) => {
        response.status(404).send({
          message: "Email not found",
          e,
        });
      });
});

app.listen(3005, ()=>{
    console.log("server running");
})