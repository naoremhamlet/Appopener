const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    email: { type: String},
    link: {type: String, required: true},
    short: {type: String, required: true},
    host: {type: String, required: true},
    click: {type: Number, required: true, default: 0},

}, {timestamps: true},{collection: 'links'});

module.exports = mongoose.model('links', linkSchema)