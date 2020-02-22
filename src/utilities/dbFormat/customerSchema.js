const notification = require('./notificationSchema.js');
const order = require('./orderSchema.js');

const customer = {
	email: {
		required: [true, 'Required field'],
		type: String,
		unique: true
	},
	name: {
		required: [true, 'Required field'],
		type: String
	},
	phone: {
		required: [true, 'Required field'],
		type: String
	},
	password: {
		required: [true, 'Password is required'],
		type: String
	},
	walletAmount: {
		required: [true, 'Wallet amount'],
		type: Number
	},
	address: {
		required: [true, 'Address of the customer'],
		type: [String]
	},
	notifications: {
		required: [true],
		type: [notification]
	},
	orders: {
		required: [true],
		type: [order]
	}
};

module.exports = customer;
