const links = require("./Model/links");
const subdomains = require("./Model/subdomains");


async function ForwardLink(req, res, next) {
    const forwardlink = await links.findOne({ _id: req.params.forward })
    if (forwardlink == null) return res.sendStatus(404)
    
    forwardlink.click++;
    forwardlink.save();
    
    res.redirect(forwardlink.link)
}

async function ForwardSubdomain(req, res, next) {
    const {subdomain} = req.params;

    const forwardlink = await subdomains.findOne({ _id: subdomain})
    if(forwardlink == null) return res.sendStatus(404)

    forwardlink.total_click++;
    forwardlink.save();

    res.redirect(forwardlink.link)
}

async function ForwardPlatform(req, res, next) {
    const {subdomain, platform} = req.params;

    const d = await subdomains.findOne({ _id: subdomain})
    if(d== null) return res.sendStatus(404)

    const forwardlink = d.childlink.filter(el => el._id===platform);

    if(forwardlink.length == 0) return res.send(400)

    forwardlink.click++;
    d.total_click++;

    res.redirect(forwardlink.link)
}

async function ForwardRoute(req, res, next) {
    const {subdomain, platform, route} = req.params;

    const q = `${platform}/${route}`

    const d = await subdomains.findOne({ _id: subdomain})
    if(d== null) return res.sendStatus(404)

    const forwardlink = d.childlink.filter(el => el._id===q);

    if(forwardlink.length == 0) return res.send(400)

    forwardlink.click++;
    d.total_click++;

    res.redirect(forwardlink.link)
}




module.exports = {ForwardLink,ForwardSubdomain, ForwardPlatform, ForwardRoute}