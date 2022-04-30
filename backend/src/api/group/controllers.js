const service = require('./services');
const models = require('./models');
const { addGroup } = require('./services');

// Handles business logic
module.exports = {
	async addGroup(req, res) {
		let data;

		try {
			data = await models.groupCreate.validateAsync(req.body);
		} catch (e) {
			return null;
		}

		try {
			const result = await service.addGroup(req.db, data);
			return result;
		} catch (e) {
			console.log(e)

			return null;
		}
	},

	async getGroup(req, res) {
		let data;

		try {
			data = await models.groupID.validateAsync(req.params.id);
		} catch (e) {
			return null;
		}

		try {
			const user = service.getGroup(req.db, data);
			return user
		} catch (e) {
			return null;
		}
	}
};
