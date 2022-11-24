const User = require("./models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async(req, res, next) =>{
    bcrypt.hash(req.body.password, 10, async function(err, hashedpass){
        if(err) {
            console.log("error occured")
            res.json({error:err})
        }

    let user = await User.findOne({ username: req.body.username })
    if (user) {
        return res.status(400).send('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        console.log(req.body.username);
        user = new User({
            username: req.body.username,
            password: hashedpass
        });
        await user.save();
        console.log(user);
        res.json({message: "succesfully registered"});
    }
    });
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
                    res.json({message: err})
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