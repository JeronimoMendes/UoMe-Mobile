const Joi = require('joi');

const groupCreate = Joi.object({
	name: Joi.string().required(),
	emoji: Joi.string().required(),
	users: Joi.array().items(Joi.number().integer().positive()).required(),
});

const groupID = Joi.number().integer().positive();

module.exports = {
	groupCreate,
	groupID,
};
