const Joi = require('joi');

const userCreate = Joi.object({
	name: Joi.string().alphanum().min(3).max(30).required(),
	email: Joi.string().email(),
});

const userID = Joi.number().integer().positive();

module.exports = {
	userCreate,
	userID
};
