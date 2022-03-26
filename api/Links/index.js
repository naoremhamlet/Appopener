const Links = require('express').Router();
const { CheckAuth } = require('../Authentication/controller/Authentication');
const { GetHostName, GenerateLink } = require('./controller/GenerateLink');
const { GetLinks, DeleteLink } = require('./controller/GetLinks');



Links.get('/api/links/host', GetHostName)
Links.post('/api/links/shorten', GenerateLink)

Links.post('/api/links/getlinks', CheckAuth, GetLinks)
Links.post('/api/links/delete', CheckAuth, DeleteLink)

exports.Links = Links;