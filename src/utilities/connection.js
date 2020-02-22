const mongoose = require('mongoose');

const customer = require('./dbFormat/customerSchema.js');
const order = require('./dbFormat/orderSchema.js');
const product = require('./dbFormat/productSchema.js');

mongoose.Promise = global.Promise; //Line 1

/*const url =
	'mongodb+srv://spendwise:spendwise@cluster0-wemjx.mongodb.net/test?retryWrites=true&w=majority';
*/

const url = 'mongodb://127.0.0.1:27017/b&b';
mongoose.set('useCreateIndex', true); //added to suppress warning in mongoose v5.2.9

let connection = {};

let customerSchema = mongoose.Schema(customer, { collection: 'customer' }); //Line 1

connection.getCustomerCollection = () => {
	return mongoose
		.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(database => {
			return database.model('customer', customerSchema);
		})
		.catch(error => {
			let err = new Error('Could not connect to Database');
			err.status = 500;
			throw err;
		});
};

let productSchema = mongoose.Schema(product, { collection: 'product' });

connection.getProductCollection = () => {
	return mongoose
		.connect(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		.then(database => {
			return database.model('product', productSchema);
		})
		.catch(err => {
			let err = new Error('Could not connect to Database');
			err.status = 500;
			throw err;
		});
};

let productSchema = mongoose.Schema(product, { collection: 'product' });

connection.getProductCollection = () => {
	return mongoose
		.connect(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		.then(database => {
			return database.model('product', productSchema);
		})
		.catch(err => {
			let err = new Error('Could not connect to Database');
			err.status = 500;
			throw err;
		});
};

module.exports = connection;
