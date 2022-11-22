const User = require("./models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res, next) =>{
    bcrypt.hash(req.body.password, 10, function(err, hashedpass){
        if(err) {
            res.json({error:err})
        }
        let user = new User({
            username: req.body.username,
            password: hashedpass,
        })
    
        user.save()
        .then(user => {
            res.json({
                message: 'user registered successfully'
            })
        })
        .catch(error => {
            res.json({
                message: error
            })
        })
    })
}


const login = (req,res,next) =>{
    var useremail = req.body.username
    var userpassword = req.body.password

    User.findOne({$or: [{username:useremail}]})
    .then(user => {
        if(user)
        {
            bcrypt.compare(userpassword, user.password, function(err, result){
                if(err)
                {
                    res.json({message: "wrong password"})
                }
                if(result)
                {
                    let token = jwt.sign({username: user.username}, 'verysecretvalue', {expiresIn: '1h'})
                    res.json({message: "successful login", token})
                }
                else
                {
                    res.json({
                        message: "wrong password"
                    })
                }
            })
        }
        else
        {
            res.json(
                {
                    message:"no user please register"
                }
            )
        }
    })
}
module.exports = {register, login}