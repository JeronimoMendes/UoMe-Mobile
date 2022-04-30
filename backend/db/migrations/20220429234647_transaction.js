/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
	await knex.schema.createTable('transaction', (table) => {
		table.increments('id').primary();
		table.integer('value').unsigned();
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.string('description');
	});

	// join table for users and transactions
	await knex.schema.createTable('user_transaction', (table) => {
		table.increments('id').primary();
		table.integer('user_id').references('id').inTable('user');
		table.integer('transaction_id').references('id').inTable('transaction');
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
	await knex.schema.dropTableIfExists('user_transaction');

	await knex.schema.dropTableIfExists('transaction');
};
