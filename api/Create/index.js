const Create = require('express').Router()
const { CheckAvailability } = require('./controller/CheckAvailablility');


Create.get('/api/check', CheckAvailability);



exports.Create = Create;