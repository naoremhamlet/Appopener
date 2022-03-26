const Authentication = require('express').Router();
const users = require('../Model/users');
const { Login, Logout, CheckAuth } = require('./controller/Authentication');


Authentication.post('/api/login', Login);
Authentication.get('/api/logout', Logout);
Authentication.get('/api/checklogin', CheckAuth, (req, res) => {

    users.findOne({_id: req.user.email})
    .then(result => {
        const obj = {
            _id: req.user.email,
            name: req.user.name,
            email: req.user.email,
            picture: req.user.picture,
        }
        if(result) {
            if(result.name != obj.name || users.picture != obj.picture) {
                users.updateOne({_id: req.user.email}, {name: obj.name, picture: obj.picture});
            }
        } else {
            users.create(obj);
        }
        res.send({
            success: true,
            user: req.user
        })
    })
    .catch(err => {
        res.send({ success: false, user: null })
    })
})

exports.Authentication = Authentication;