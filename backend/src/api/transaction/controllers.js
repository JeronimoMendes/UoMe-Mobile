const service = require('./services');
const models = require('./models');
const { addTransaction } = require('./services');

// Handles business logic
module.exports = {
	async addTransaction(req, res) {
		let data;

		try {
			data = await models.transactionCreate.validateAsync(req.body);
		} catch (e) {
			return null;
		}

		try {
			const result = await service.addTransaction(req.db, data);
			return result;
		} catch (e) {
			return null;
		}
	},

	async getTransaction(req, res) {
		let data;

		try {
			data = await models.transactionID.validateAsync(req.params.id);
		} catch (e) {
			return null;
		}

		try {
			const user = service.getTransaction(req.db, data);
			return user;
		} catch (e) {
			return null;
		}
	},
};
