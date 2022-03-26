const dotenv = require('dotenv');
const path = require('path');

const {OAuth2Client} = require('google-auth-library');

const users = require("../../Model/users");

dotenv.config({ path : path.join(__dirname,'../../../.env') });

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

async function CheckAuth(req, res, next){

    let token = req.cookies['session-token'];

    let user = {};
    const client = new OAuth2Client(CLIENT_ID);

    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            requiredAudience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        user.name = payload.name;
        user.email = payload.email;
        user.picture = payload.picture;
    }

    verify()
    .then(()=>{
        req.user = user;
        next();
    })
    .catch((err) => {
        res.clearCookie('session-token')
        res.send({
            success: false
        })
    })

}

async function Login(req, res, next) {
    let token = req.body.token;
    const client = new OAuth2Client(CLIENT_ID);

    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
    }
    verify()
    .then(()=> {
        res.cookie('session-token', token);
        res.send({ success: true, token: token});
    })
    .catch(console.error);
}

async function Logout(req, res, next) {
    res.clearCookie('session-token');
    res.send({
        success: true
    })
}

module.exports = {CheckAuth, Login, Logout}