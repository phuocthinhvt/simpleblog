"use strict";
const User = require("./../model/user")
const bcrypt = require("bcrypt");

module.exports = function(req, res, next) {
    User.findOne({email: req.body.email}, function (err, user) {
        req.session.user = user;
        
        if (user && (req.body.password == user.password)) {
            console.log("blog");
            return res.status(200).json({
                page: "blog"
            })
        }
        else {
            console.log("login");
            return res.status(200).json({
                page: "login"
            })
        }
    })
}