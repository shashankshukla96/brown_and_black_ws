const attribute = {
	key: {
		required: [true, 'Attribute name is required'],
		type: String
	},
	value: {
		required: [true, 'Attribute name is required'],
		type: String
	}
};

const sizedOrder = {
	size: {
		required: [true, 'Size of product in this color is required.'],
		type: String
	},
	quantity: {
		required: [true, 'Quantity.'],
		type: Number
	},
	price: {
		required: [true, 'Amount of the product'],
		type: Number
	},
	discount: {
		required: [true, 'Amount of the Discount percentage'],
		type: Number
	},
	attributes: {
		required: [true, 'Attributes of a product are required.'],
		type: [attribute]
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
	colors: {
		required: [true, 'In which colors, product is available ?'],
		type: [sizedOrder]
	},
	images: {
		required: [true, 'Images of this product.'],
		type: [String]
	},
	description: {
		required: [true, 'Product Description is required'],
		type: String
	},
	attributes: {
		required: [true, 'Attributes of a product are required.'],
		type: [attribute]
	}
};

module.exports = product;
