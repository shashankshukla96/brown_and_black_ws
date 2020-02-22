class Customer {
	constructor(obj) {
		this.email = obj.email;
		this.name = obj.name;
		this.phone = obj.phone;
		this.password = obj.password;
		this.walletAmount = 0;
		this.address = [];
		this.notifications = [];
		this.orders = [];
	}
}

module.exports = Customer;
