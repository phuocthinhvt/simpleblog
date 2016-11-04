var express = require('express');
var router = express.Router();
var userController = require("./../api/user");
var checklogin = require("./../middleware/checkLogin")
/* GET home page. */

router.get('/',function(req,res){
  res.render('blog');
})

router.get('/user',function(req,res){
  res.render('blog-user');
})

router.get('/login',function(req,res){
  res.render('login');
})

router.get('/view/:id',function(req,res){
  res.render("view-blog");
});

router.get('/edit/:id',function(req,res){
    res.render("edit-blog");
});


 router.get('/create-user',function(req,res){
 res.render('create-user');
 })

router.get('/add',function(req,res){
  res.render('add-blog');
})

router.get('/signout',userController.logout);




router.post('/create-user',userController.createUser);

router.post('/checklogin',checklogin);

module.exports = router;
