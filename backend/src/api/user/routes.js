const express = require('express');
const controller = require("./controllers");

const router = express.Router();

router.post('/user', async (req, res) => {
	const member = await controller.addUser(req, res);
	return res.json(member);
})

module.exports = router;