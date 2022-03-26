const subdomains = require("../../Model/subdomains");


async function CheckAvailability(req, res, next) {
    const {subdomain} = req.query;

    subdomains.findOne({domain: subdomain})
    .then(d => {
        if(!d)
            res.send({success: true, available: true});
        else
            res.send({success: true, available: false});
    }).catch(err => res.send({success: false}))
}

async function RouteAvailable(req, res, next) {

    const {route, domain, link} = req.body;
    const {email} = req.user;
    
    subdomains.findOne({ _id: domain, email: email})
    .then(d => {
        if(d) {
            const availableroutes = d.childlink.map(el => el._id);
            if(availableroutes.filter(el => el===route).length) {
                res.send({ success: false });
            } else {
                subdomains.updateOne({ _id: domain, email: email},
                    { $addToSet: { childlink: { _id: route, route: route, link: link }}
                }).then(r=> { 
                    res.send({success: true, available: true})
                }).catch(e => res.send({success: false, available: false}));
            }
        } else {
            res.send({ success: false})
        }
    }).catch(err => res.send({ success: false }));
}

module.exports = {CheckAvailability, RouteAvailable};