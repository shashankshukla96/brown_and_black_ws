const productModel = require('../model/productModel.js');

product = {};

product.add = prod => {
	return productModel.add(prod).then(data => {
		if (data) return 'Product Added Successfully.';
		else {
			throw new Error('Product could not be added');
		}
	});
};

module.exports = product;
