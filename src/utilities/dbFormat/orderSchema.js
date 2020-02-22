const attribute = {
	size: {
		required: [true, 'Item size is required'],
		type: String
	},
	color: {
		required: [true, 'Item color is required'],
		type: String
	}
};

const product = {
	productId: {
		required: [true, 'Product Id.'],
		type: String
	},
	productName: {
		required: [true, 'Product Id.'],
		type: String
	},
	attributes: {
		required: [true, 'Attribute of an ordered item is required'],
		type: [attribute]
	},
	quantity: {
		required: [true, 'Quantity.'],
		type: Number
	},
	amount: {
		required: [true, 'Amount of the product'],
		type: Number
	}
};

const order = {
	orderId: {
		required: [true, 'Order Id is required.'],
		type: String
	},
	customer: {
		required: [true, 'To whom this order belongs to.'],
		type: String
	},
	products: {
		required: [true, 'Which products customer bought ?'],
		type: [product]
	},
	amount: {
		required: [true, 'Total amount.'],
		type: Number
	},
	orderDate: {
		required: [true, 'When order was placed.'],
		type: Date
	}
};

module.exports = order;
