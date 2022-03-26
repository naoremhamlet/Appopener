const subdomains = require("../../Model/subdomains");

async function CheckOut(req, res, next) {

    const {cart} = req.body;

    let docs = [];
    cart.forEach((el,i) => {
        docs.push({
            _id: cart[i].domain.trim(),
            domain: cart[i].domain.trim(),
            email: req.user.email
        })
    });

    subdomains.insertMany(docs).then(d => {
        res.send({ success: true})
    }).catch(err => {
        if(err.code === 11000) {
            res.send({ success: false, msg: "already exists domain present"})
        }
    })
}

module.exports = {CheckOut};