const service = require('./services');
const models = require('./models');

// Handles business logic
module.exports = {
	async addUser(req, res) {
		let data;

		try {
			data = await models.userCreate.validateAsync(req.body);
		} catch (e) {
			return null;
		}

		try {
			const result = await service.addUser(req.db, data);
			return result;
		} catch (e) {
			return null;
		}
	},

	async getUser(req, res) {
		let data;

		try {
			data = await models.userID.validateAsync(req.params.id);
		} catch (e) {
			return null;
		}

		try {
			const user = service.getUser(req.db, data);

			return user;
		} catch (e) {
			return null;
		}
	},
};
