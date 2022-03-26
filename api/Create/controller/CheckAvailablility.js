const subdomains = require("../../Model/subdomains");


async function CheckAvailability(req, res, next) {
    const {domain} = req.query

    const url = await subdomains.findOne({ domain: domain })
    if(url)
        res.send({ success: true, avalilable: true})
    else 
        res.send({ success: true, avalilable: false});
}




module.exports = {CheckAvailability}