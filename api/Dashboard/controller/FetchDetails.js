const subdomains = require("../../Model/subdomains");
const users = require("../../Model/users");


async function FetchDetails(req, res, next) {
    const user = req.user;
    const userdetails = await users.findOne({ _id: user.email })
    if(userdetails) {
        const linkdetails = await subdomains.find({ email: user.email });
        
        res.send({
            success: true,
            email: userdetails.email,
            name: userdetails.name,
            subdomains: linkdetails.map(el => {
                return {
                    domain: el.domain,
                    link: el.link,
                    click: el.click
                }
            })
        })
    } else {
        await users.create({
            _id: user.email,
            name: user.name,
            email: user.email,
            picture: user.picture
        })

        res.send({
            success: true,
            email: user.email,
            name: user.name,
            subdomains: []
        })
    }
}


module.exports = {FetchDetails}