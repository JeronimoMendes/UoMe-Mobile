const express = require('express');
const controller = require('./controllers');

const router = express.Router();

router.post('/user', async (req, res) => {
	const user = await controller.addUser(req, res);

	if (!user) return res.sendStatus(400);

	return res.json(user);
});

router.get('/user/:id', async (req, res) => {
	const user = await controller.getUser(req, res);

	if (!user) return res.sendStatus(400);

	return res.json(user);
});

module.exports = router;
