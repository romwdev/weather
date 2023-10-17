const controller = require('./controllers');
const router = require('express').Router();

router.get('/users', controller.getUsers);
router.post('/users', controller.postUser);

module.exports = router;