const user = require("./routes/user");

const router = require('express').Router();

router.use('/user', user)

module.exports = router;