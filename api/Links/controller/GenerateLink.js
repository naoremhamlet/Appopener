const extractDomain = require("extract-domain");
const ShortUniqueId = require('short-unique-id');
const links = require("../../Model/links");

const APP_DOMAIN = process.env.REACT_APP_DOMAIN;

async function GetHostName(req, res, next) {
    const {uri} = req.query;

    const url_detail = extractDomain(uri, { tld: true })
    if(url_detail && url_detail.split('.')[0]) {
        res.send({ success: true, hostname: url_detail.split('.')[0]})
    } else {
        res.send({ success: false })
    }
}

async function GenerateLink(req, res, next) {
    const {link, email, host} = req.body;
    const uid = new ShortUniqueId({length: 10});
    let short = uid();
    const obj = {
        _id: short,
        link: link,
        short: short,
        host: host,
        email: email
    }
    links.create(obj).then(() => {
        res.send({ success: true, link: `${APP_DOMAIN}/${short}`})
    }).catch(() => {
        res.send({ success: false})
    })
}

module.exports = {GenerateLink, GetHostName};