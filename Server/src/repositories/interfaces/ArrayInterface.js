const User = require('../../models/User');

module.exports = class UserInterface {
	create(newUser) {
		User.create(newUser).catch(err => {
			console.error(err);
		});
	}

	async getAll() {
		try {
			const users = await User.find();
			return users;
			
		} catch (err) {
			console.error(err);
		}
	}
}