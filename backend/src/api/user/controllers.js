const service = require("./services");
const models = require('./models')

// Handles business logic
module.exports = {
	async addUser(req, res) {
		let data 
		try {
			data = await models.userCreate.validateAsync(req.body);
		} catch (e) {
			console.log(e)
			return null;
		}

		try {
			const result = await service.addUser(req.db, data);
			console.log("adicionei")
			return result;
		} catch (e) {
			console.log(e);
			return null;
		}
	},
};
