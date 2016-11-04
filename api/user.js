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
const User = require("./../model/user");

exports.createUser = function(req, res){
    var data = req.body;
    User.create(data,function(err,user){
        if(err){
            console.log(err);
        }
        else{
            return res.status(200).json({
                user:user
            })
        } 
    });
   
}
exports.logout = function(req, res){
    req.session.destroy();
}

     

