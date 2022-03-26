const links = require("../../Model/links");

const APP_DOMAIN = process.env.REACT_APP_DOMAIN;

async function GetLinks(req, res, next) {
    const {email} = req.body;

    links.find({ email: email})
    .then(d => {
        if(d && d.length>0) {
            res.send({ success: true, links: d.map(el => {
                return {
                    long: el.link, 
                    short:`${APP_DOMAIN}/${el.short}`, 
                    click:el.click, 
                    domain:el.host, 
                    created: new Date(el.createdAt).toLocaleString('en-IN', { year:"numeric",month:'2-digit',day:'2-digit'})
                }
            })})
        } else {
            res.send({ success: true, links: []})
        }
    })
    .catch(err => res.send({success: false}))
}

async function DeleteLink(req, res, next) {
    const {link} = req.body;
    const id = link.split('/').slice(-1);

    links.findOneAndDelete({_id: id})
    .then(d => res.send({success: true}))
    .catch(err => res.send({success: false}))
}

module.exports = {GetLinks, DeleteLink};