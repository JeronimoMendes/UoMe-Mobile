const Joi = require('joi');

const transactionCreate = Joi.object({
	value: Joi.number().integer().positive().required(),
	description: Joi.string().required(),
	users: Joi.array().items(Joi.number().integer().positive()).required(),
	group: Joi.number().integer().positive().required()
});

const transactionID = Joi.number().integer().positive();

module.exports = {
	transactionCreate,
	transactionID
};
