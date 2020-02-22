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

const sizeProduct = {
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
	}
};

const sizedOrder = {
	color: {
		required: [true, 'Color of the product'],
		type: String
	},
	sizes: {
		required: [true, 'Color of the product'],
		type: [sizeProduct]
	},
	images: {
		required: [true, 'Images of this product.'],
		type: [String]
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
