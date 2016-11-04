/**
 * Created by gumivietnam on 10/28/16.
 */
"use strict";


    var balancerServer = "http://localhost:8888";
    var databaseServer = "localhost";

var mongodbUrl = 'mongodb://' + databaseServer + ':27017/nodetest2';

module.exports = {
    "folderUpload": "uploads",
    "port": 3000,
    "databaseServer":databaseServer,
    'database': mongodbUrl,
    'expiredInMinute': 60 * 60// expires in 60 minutes,
};