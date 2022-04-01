const knex = require('knex')(require('../../db/knexfile.js'));

const knexMiddleware = (req, _res, next) => {
	req.db = knex;
	next();
};

module.exports = {
	knexMiddleware,
};
