const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    _id: { type: String, required: true},
    route: { type: String, required: true},
    link: { type: String, required: true},
    click: { type: Number, default: 0}
},{timestamps: true})

const subdomainSchema = new mongoose.Schema({
    _id: { type: String, required: true},
    domain: {type: String, required: true},
    link: { type: String, default: "https://appopener.com"},
    email: { type: String, required: true},
    total_click: {type: Number,  default: 0},
    status: {type: String, default: "payment_pending"},
    childlink: [linkSchema]

},{timestamps: true}, {collection: 'subdomains'});


module.exports = mongoose.model('subdomains', subdomainSchema);