"use strict";
var express = require('express');
var router = express.Router();
var userController = require("./../api/user");
router.post('/create-user',userController.createUser);


module.exports = router;