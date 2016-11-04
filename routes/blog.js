/**
 * Created by gumivietnam on 11/1/16.
 */
var express = require('express');
var router = express.Router();
var blogController = require("./../api/blog");

router.get('/user',function(req,res){
    res.render("blog-user");
});
router.post('/add',blogController.add);
router.put('/upd/:id',blogController.upd);
router.delete('/del/:id',blogController.del);
router.get('/view',blogController.view);
router.get('/getblog/:id',blogController.getBlogbyid)
router.get('/getblogcontent/:id',blogController.getblogcontentbyid)
module.exports = router;