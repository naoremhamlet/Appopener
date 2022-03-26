const subdomains = require("../../Model/subdomains");

async function DeleteRoute(req, res, next) {
    const {domain, route} = req.body;
    const {email} = req.user;

    subdomains.updateOne({_id: domain, email: email},
        { $pull: { childlink: { _id: route }}}
    ).then(d => {
        res.send({ success: true});
    }).catch(e => { res.send({ success: false })});
}

module.exports = {DeleteRoute};