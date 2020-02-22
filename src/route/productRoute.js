const express = require('express');
const routing = express.Router();

const productService = require('../service/productService.js');

routing.post('/add', (req, res, next) => {
	const prod = req.body;

	productService
		.add(prod)
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			next(err);
		});
});

module.exports = routing;
