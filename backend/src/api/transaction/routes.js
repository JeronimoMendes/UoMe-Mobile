const express = require('express');
const controller = require('./controllers');

const router = express.Router();

router.post('/transaction', async (req, res) => {
	const transaction = await controller.addTransaction(req, res);

	if (!transaction) return res.sendStatus(400);

	return res.json(transaction);
});

router.get('/transaction/:id', async (req, res) => {
	const transaction = await controller.getTransaction(req, res);

	if (!transaction) return res.sendStatus(400);

	return res.json(transaction);
});

module.exports = router;
