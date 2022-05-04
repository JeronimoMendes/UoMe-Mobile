// Responsible for using the db
const fields = ['created_at', 'description', 'value', 'author'];

module.exports = {
	async addTransaction(db, data) {
		const [id] = await db
			.insert({
				value: data.value,
				description: data.description,
				group_id: data.group,
				author: data.author,
			})
			.into('transaction')
			.returning('id');

		// Create a user_transaction row for each user in the new transaction
		data.users.forEach(async (userID) => {
			await db
				.insert({
					user_id: userID,
					transaction_id: id.id,
				})
				.into('user_transaction');
		});

		return id;
	},

	async getTransaction(db, id) {
		const [transaction] = await db
			.select(...fields)
			.where('id', id)
			.from('transaction');

		if (transaction === null) return null;

		const author = await db.select('id', 'name').where('id', transaction.author).from('user');

		return {
			value: transaction.value,
			description: transaction.description,
			createdAt: transaction.created_at,
			author: author[0],
		};
	},
};
