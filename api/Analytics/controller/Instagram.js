const { instagram } = require('instagram-scraper-api')


async function InstagramInfo(req, res, next) {

    const { user } = req.query;

    instagram.user(user)
    .then(info => res.send({ success: true, data: info}))
    .catch(err => res.send({ success: false}));
}

module.exports = {InstagramInfo}