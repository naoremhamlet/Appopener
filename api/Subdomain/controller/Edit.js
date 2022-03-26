const subdomains = require("../../Model/subdomains");

async function EditRoute(req, res, next) {
    const {domain, route, link} = req.body;
    const {email} = req.user;

    if(route ==="") {

        subdomains.updateOne({ id: domain, email: email},
            { $set: {link: link}}
        ).then(d => {
            res.send({ success: true })
        }).catch(e => {
            res.send({ success: false});
        })

    } else {
        subdomains.updateOne({_id: domain, email: email, "childlink._id": route},
            { $set: { "childlink.$.link": link }}
        ).then(d => {
            console.log(d)
            res.send({ success: true});
        }).catch(e => { console.log(err);res.send({ success: false })});

    }

}

module.exports = {EditRoute}