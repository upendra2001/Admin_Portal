'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    fname: String,
    lname: String,
    email: String,
    phone: String,
    snaps: [{
        img: String,
        timestamp: Number
    }],
}, { collection: 'user' });

module.exports = mongoose.model('users', UserSchema);
