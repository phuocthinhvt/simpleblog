/**
 * Created by gumivietnam on 10/28/16.
 */

/*
 * Create user
 * @method POST
 * @param {Object}
 * @return {Object}
 * @private
 */
const Blog = require("./../model/blog");

exports.add = function(req, res){
    console.log("THINH LE")
    var data = req.body;
    Blog.create(data,function(err,blog){
        if(err){
            console.log(err);
        }
        else{
            return res.status(200).json({
                blog:blog
            })
        }
    });

}

exports.view = function(req, res){
    Blog.find(function(err,blog){
        if(blog){
            return res.status(200).json({
                blog:blog
            })
        }
    });

}

exports.del = function(req, res){
    Blog.findByIdAndRemove({_id:req.params.id},function(err,blog){
        if(err){
            console.log(err);
        }
        else{
            return res.status(200).json({
                blog:blog
            })
        }
    });

}

exports.getBlogbyid = function(req, res){
    Blog.findOne({_id:req.params.id},function(err,blog){
        if(blog){
           return res.status(200).json({
               blog:blog
           })
        }
        else{
            console.log(err);
        }
    });

}

exports.upd = function(req, res){
    console.log("thinh le");
    Blog.findByIdAndUpdate(req.params.id,req.body,function(err,blog){
        if(err){
            console.log(err);
        }
        else{
            console.log(blog);
        }
    });

}

exports.getblogcontentbyid = function(req, res) {
    Blog.findOne({_id: req.params.id}, function (err, blog) {
     console.log(req.session.user);
        if (blog && req.session.user) {
            blog.content = blog.content;
        } else{
            blog.content = blog.content.substring(0,9);
        }
            return res.status(200).json({
                blog: blog
            })
    })
}