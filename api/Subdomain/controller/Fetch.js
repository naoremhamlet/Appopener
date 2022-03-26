const subdomains = require("../../Model/subdomains");

async function FetchSubdomains (req, res, next) {

    subdomains.find({email: req.user.email})
    .then(d => {
        if(d && d.length) {
            res.send({ success: true, domains: d.map(el => el.domain)});
        } else {
            res.send({ success: false});
        }
    }).catch(err => res.send({ success: false}));
}


async function FetchRoutes (req, res, next) {
    const {domain} = req.body;
    const {email} = req.user;
    subdomains.findOne({_id: domain, email:email})
    .then(d => {
        if(d) {
            let routes = [];
            routes.push({
                route: "",
                link: d.link,
                click: d.total_click
            })
            d.childlink.forEach(el => {
                routes.push({
                    route: el.route,
                    link: el.link,
                    click: el.click
                })
            })
            res.send({ success: true, routes: routes })
        } else {
            res.send({ success: false})
        }
    }).catch(err => res.send({success: false}))
}

module.exports = {FetchSubdomains, FetchRoutes};