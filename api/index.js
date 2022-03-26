const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const wildcardSd = require('wildcard-subdomains');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser')


const { ForwardLink, ForwardRoute, ForwardSubdomain, ForwardPlatform } = require('./Forward');
const {Dashboard} = require('./Dashboard')
const {Authentication} = require('./Authentication');
const { Create } = require('./Create');
const { Links } = require('./Links');
const { Analytics } = require('./Analytics');
const { Subdomain } = require('./Subdomain');
const app = express();



dotenv.config({ path : path.join(__dirname,'./.env') });

const PORT = process.env.PORT || 8000;
const DB_URI = process.env.DB_URI

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true})

app.use(wildcardSd({ namespace: "s", whitelist: ["www", "app"] }));
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    origin : true,
    credentials : true
}));

app.use(cookieParser());
app.use(express.json());



app.use(Dashboard);
app.use(Authentication);
app.use(Create);
app.use(Links);
app.use(Analytics);
app.use(Subdomain);

app.get('/:forward', ForwardLink);
app.get('/s/:subdomain/', ForwardSubdomain);
app.get('/s/:subdomain/:platform', ForwardPlatform);
app.get('/s/:subdomain/:platform/:route', ForwardRoute);

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
