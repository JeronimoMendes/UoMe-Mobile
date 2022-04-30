const user = require('./user/routes');
const transaction = require('./transaction/routes');
const group = require('./group/routes');

const router = require('express').Router();

router.use('/', user);
router.use('/', transaction);
router.use('/', group);

module.exports = router;
