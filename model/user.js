/**
 * Created by gumivietnam on 10/31/16.
 */
"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true
    },
    fullName: String,
    country: {type: String, default: "vn"},
}, { strict: true });

module.exports = mongoose.model('User', UserSchema);