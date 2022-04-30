/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
	await knex.schema.createTable('group', (table) => {
		table.increments('id').primary();
		table.string('name');
		table.string('emoji');
	});

	await knex.schema.table('transaction', (table) => {
		table.integer('group_id').references('id').inTable('group');
	});

	await knex.schema.createTable('user_group', (table) => {
		table.increments('id').primary();
		table.integer('user_id').references('id').inTable('user');
		table.integer('group_id').references('id').inTable('group');
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
	await knex.schema.table('transaction', (table) => {
		table.dropColumn('group_id');
	});

	await knex.schema.dropTableIfExists('user_group');
	7;

	await knex.schema.dropTableIfExists('group');
};
