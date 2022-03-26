const Dashboard = require('express').Router();
const { CheckAuth } = require('../Authentication/controller/Authentication');
const { FetchDetails } = require('./controller/FetchDetails');



Dashboard.get('/api/dashboard', CheckAuth, FetchDetails)


exports.Dashboard = Dashboard;