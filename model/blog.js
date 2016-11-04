/**
 * Created by gumivietnam on 10/31/16.
 */
"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var BlogSchema = new Schema({
    author: {
        type: String,
        required:true
    },
    subject: {
        type: String,
        required: true
    },
    content: String,
    comment: {type: String}
}, { strict: true });

module.exports = mongoose.model('Blog', BlogSchema);