/**
 * Created by GUMI-QUANG on 8/24/16.
 */
"use strict";

const bunyan = require('bunyan');
const log = bunyan.createLogger({
  name: 'phiphi',
  serializers: {
    req: bunyan.stdSerializers.req,
    res: bunyan.stdSerializers.res,
    err: bunyan.stdSerializers.err
  },
  streams:[{
    level: 'info',
    path: "./logs/info.log"
  },{
    level: 'warn',
    path: "./logs/warn.log"
  },{
    level: 'debug',
    path: "./logs/debug.log"
  },{
    level: 'error',
    path: "./logs/error.log"
  }]
});

module.exports = log;