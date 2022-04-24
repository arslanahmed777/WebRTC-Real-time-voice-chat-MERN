const router = require('express').Router();
const authController = require('./controllers/auth-controller');

router.post('/api/send-otp', authController.sendOtp);
router.post('/api/verify-otp',);

module.exports = router;