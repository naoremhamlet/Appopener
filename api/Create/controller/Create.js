const querystring = require('querystring'); 
const urlObj = require("../../models/urlObj")

async function CreateLink(req, res, next) {
    const obj = {
        _id: req.body.domain.toLowerCase().split(' ').join(''),
        // name: req.user.name,
        // picture: req.user.picture,
        url: req.body.url,
        domain: req.body.domain.toLowerCase().split(' ').join(''),
        click: 0
    }
    await urlObj.create(obj)
    .then(()=> {
        const query = querystring.stringify({
            "error": false,
            "msg": "your domain is created and hosted as: ",
            "domain": req.body.domain.toLowerCase().split(' ').join()
        });
        res.redirect('/?' + query);
    })
    .catch(()=> {
        const query = querystring.stringify({
            "error": true,
            "msg": "domain already in use.. please check another one",
            "domain": ""
        });
        res.redirect('/?' + query);
    })
}