// Responsible for using the db
const fields = ['id', 'name', 'email', 'emoji'];

module.exports = {
	async addUser(db, data) {
		const [id] = await db.insert(data).into('user').returning('id');
		return id;
	},

	async getUser(db, id) {
		const [result] = await db.select(...fields).where('id', id).from('user');

		return result ? result : null;
	}
};
