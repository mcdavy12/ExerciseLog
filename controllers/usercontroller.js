const router = require('express').Router();
// const User = require("../db").import("../models/user");
const sequelize= require('../db')
const user = sequelize.import('../models/user');


const jwt = require('jsonwebtoken')
const bcrypt= require('bcryptjs')



router.post('/create', function(req, res) {
    User.create({
        userName: req.body.user.userName,
        password: bcrypt.hashSync(req.body.user.password, 12)
    })
    .then(user => {
        const token = jwt.sign({id:user.id}, process.env.JWT_SECRET, {expiresIN: "7d"})

        res.json({
            user: user,
            message:"user was created successfully",
            sessionToken: token
        })
    })
    .catch(err => res.status(500).send(err))

})
module.exports=router