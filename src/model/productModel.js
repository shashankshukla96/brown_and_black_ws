const conn = require('../utilities/connection.js');
const productData = require('../utilities/dbFormat/product.json');

product = {};

product.add = prod => {
	return conn.getProductCollection().then(model => {
		return model.create(productData).then(data => {
			return data;
		});
	});
};

module.exports = product;
