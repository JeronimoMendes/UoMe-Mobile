const express = require('express');
const controller = require('./controllers');

const router = express.Router();

router.post('/group', async (req, res) => {
	const group = await controller.addGroup(req, res);

	if (!group) return res.sendStatus(400);

	return res.json(group);
});

router.get('/group/:id', async (req, res) => {
	const group = await controller.getGroup(req, res);

	if (!group) return res.sendStatus(400);

	return res.json(group);
});

module.exports = router;
