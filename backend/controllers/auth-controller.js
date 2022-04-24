const otpService = require('../services/otp-service');
const hashService = require('../services/hash-service');
class AuthController {
    async sendOtp(req, res) {
        const { phone } = req.body;
        if (!phone) {
            res.status(400).json({ message: 'Phone field is required!' });
        }
        const ttl = 1000 * 60 * 2; // 2 min 
        const expires = Date.now() + ttl;
        const otp = await otpService.generateOtp();
        const data = `${phone}.${otp}.${expires}`;
        const hash = hashService.hashOtp(data);
        try {
            //await otpService.sendBySms(phone, otp);
            res.json({ hash: `${hash}.${expires}`, phone, otp, });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'message sending failed' });
        }
    }
    async verifyOtp(req, res) {
        const { otp, hash, phone } = req.body;
        if (!otp || !hash || !phone) {
            res.status(400).json({ message: 'All fields are required!' });
        }
        const [hashedOtp, expires] = hash.split('.');
        if (Date.now() > +expires) {
            res.status(400).json({ message: 'OTP expired!' });
        }

        const data = `${phone}.${otp}.${expires}`;

        const isValid = otpService.verifyOtp(hashedOtp, data);
        if (!isValid) {
            res.status(400).json({ message: 'Invalid OTP' });
        }
        else {
            res.status(200).json({ message: 'SUCCESS' });
        }
    }
}
module.exports = new AuthController();