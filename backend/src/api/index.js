const user = require('./user/routes');
const transaction = require('./transaction/routes');

const router = require('express').Router();

router.use('/', user);
router.use('/', transaction)

module.exports = router;
