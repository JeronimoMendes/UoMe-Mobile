/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable('user', (table) => {
		table.increments('id').primary();
		table.string('email').notNullable().unique();
		table.string('name').notNullable();
		table.string('emoji');
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropMaterializedView('person');
};
