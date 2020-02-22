const express = require('express');
const routing = express.Router();

const customService = require('../service/customerService.js');

routing.post('/signup', (req, res, next) => {
	const customerData = req.body;
	customService
		.signup(customerData)
		.then(data => {
			if (data) res.json({ message: data });
		})
		.catch(err => {
			next(err);
		});
});

routing.post('/login', (req, res, next) => {
	const data = req.body;
	customService
		.login(data)
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			next(err);
		});
});

module.exports = routing;
