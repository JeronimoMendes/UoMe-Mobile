// Responsible for using the db
const fields = ['created_at', 'description', 'value'];

module.exports = {
	async addTransaction(db, data) {
		console.log(data)
		const [id] = await db.insert({
			value: data.value,
			description: data.description,
			group_id: data.group
		}).into('transaction').returning('id');

		// Create a user_transaction row for each user in the new transaction
		data.users.forEach(async (userID) => {
			await db.insert({
				user_id: userID,
				transaction_id: id.id
			}).into('user_transaction');
		})

		return id;
	},

	async getTransaction(db, id) {
		const [result] = await db.select(...fields).where('id', id).from('transaction');

		return result ? result : null;
	}
};
