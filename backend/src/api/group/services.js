// Responsible for using the db
module.exports = {
	async addGroup(db, data) {
		const [id] = await db
			.insert({
				name: data.name,
				emoji: data.emoji,
			})
			.into('group')
			.returning('id');

		// Create a user_transaction row for each user in the new transaction
		data.users.forEach(async (userID) => {
			await db
				.insert({
					user_id: userID,
					group_id: id.id,
				})
				.into('user_group');
		});

		return id;
	},

	async getGroup(db, id) {
		const [group] = await db.select().where('id', id).from('group');
		if (!group) return null;

		let users = [];
		await db
			.select()
			.where('group_id', id)
			.from('user_group')
			.then((res) => {
				res.forEach((el) => {
					users.push(el.user_id);
				});
			});

		const transactions = await db.select().where('group_id', id).from('transaction');

		const result = {
			name: group.name,
			emoji: group.emoji,
			users: users,
			transactions: transactions,
		};

		return result;
	},
};
