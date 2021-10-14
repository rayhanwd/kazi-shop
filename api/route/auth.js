const router = require('express').Router();
const authcontroller = require('../controller/auth');

router.post('/register',authcontroller.registerAuth_control);
router.get('/login',authcontroller.loginAuth_control);
router.put('/:id',authcontroller.updateuser_control);
router.delete('/:id',authcontroller.deleteuser_control);

module.exports = router;
