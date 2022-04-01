require('dotenv').config(({ path: '../.env' }));

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	development: {
		client: 'postgresql',
		connection: {
			host: process.env.DB_HOST || '127.0.0.1',
			port: process.env.DB_PORT || 3306,
			user: process.env.DB_USERNAME || 'root',
			password: process.env.DB_PASSWORD || '',
			database: process.env.DB_NAME || '',
		},
	},
};
