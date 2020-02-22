const conn = require('../utilities/connection.js');
const Customer = require('./class/customer.js');
const bcrypt = require('bcrypt');

customer = {};

customer.signup = data => {
	const customer = new Customer(data);

	customer.password = bcrypt.hashSync(customer.password, 10);

	return conn.getCustomerCollection().then(model => {
		return model.create(customer).then(data => {
			return data;
		});
	});
};

customer.login = data => {
	const email = data.email;
	const password = data.password;

	return conn.getCustomerCollection().then(model => {
		return model.find({ email: email }).then(findData => {
			console.log("a", findData)

			if (findData.length === 0) {
				console.log(findData);
				return 0;
			}
			return bcrypt.compare(password, findData[0].password).then(data => {
				console.log(data);
				if (data === true) return findData;
				else return false;
			});
		});
	});
};

module.exports = customer;
