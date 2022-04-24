const crypto = require('crypto');
class OtpService {
    async generateOtp() {
        const otp = crypto.randomInt(1000, 9999);
        return otp;
    }

    // async sendBySms(phone, otp) {
    //     return await twilio.messages.create({
    //         to: phone,
    //         from: process.env.SMS_FROM_NUMBER,
    //         body: `Your codershouse OTP is ${otp}`,
    //     });
    // }

    // verifyOtp(hashedOtp, data) {
    //     let computedHash = hashService.hashOtp(data);
    //     return computedHash === hashedOtp;
    // }
}

module.exports = new OtpService();