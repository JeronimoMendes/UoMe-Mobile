// Responsible for using the db
module.exports = {
	async addUser(db, data) {
		const [id] = await db.insert(data).into('user').returning('id');
		return id;
	},
};
