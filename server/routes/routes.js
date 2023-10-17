const controller = require('./controllers');
const router = require('express').Router();

router.get('/users', controller.getAllUsers);

module.exports = router;