const Subdomain = require('express').Router();
const { CheckAvailability, RouteAvailable } = require('./controller/CheckAvailability');
const { CheckOut } = require('./controller/Checkout');
const {CheckAuth} = require('../Authentication/controller/Authentication');
const { FetchSubdomains, FetchRoutes } = require('./controller/Fetch');
const { DeleteRoute} = require('./controller/Delete');
const { EditRoute } = require('./controller/Edit');


Subdomain.get('/api/subdomain/availability', CheckAvailability)
Subdomain.post('/api/subdomain/checkout', CheckAuth, CheckOut);
Subdomain.get('/api/subdomain/fetch', CheckAuth, FetchSubdomains);
Subdomain.post('/api/subdomain/route_available', CheckAuth, RouteAvailable)
Subdomain.post('/api/subdomain/get_routes', CheckAuth, FetchRoutes)
Subdomain.post('/api/subdomain/delete_route', CheckAuth, DeleteRoute);
Subdomain.post('/api/subdomain/edit_route', CheckAuth, EditRoute);

exports.Subdomain = Subdomain;