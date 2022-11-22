const express = require("express")

const router = express()

const Authcontroller = require("./authcontroller")

router.post("/register", Authcontroller.register)
router.post("/login", Authcontroller.login)
module.exports = router