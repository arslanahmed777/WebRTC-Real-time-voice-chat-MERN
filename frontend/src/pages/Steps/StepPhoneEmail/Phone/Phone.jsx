import React, { useState } from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import styles from '../StepPhoneEmail.module.css';
import { sendOtp } from '../../../../http';
import { useDispatch } from 'react-redux';
import { setOtp } from '../../../../store/authSlice';
const Phone = ({ onNext }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();
    const Submit = async () => {
        try {
            const { data } = await sendOtp({ phone: phoneNumber })
            console.log("response", data);
            dispatch(setOtp({ phone: data.phone, hash: data.hash }));
            onNext();
        } catch (error) {
            console.error("error", error);
        }
        //onNext()
    }
    return (
        <Card title="Enter your phone number" icon="phone">
            <TextInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <div>
                <div className={styles.actionButtonWrap}>
                    <Button text="Next" onClick={Submit} />
                </div>
                <p className={styles.bottomParagraph}>
                    By entering your number, you’re agreeing to our Terms of
                    Service and Privacy Policy. Thanks!
                </p>
            </div>
        </Card>
    )
}

export default Phone