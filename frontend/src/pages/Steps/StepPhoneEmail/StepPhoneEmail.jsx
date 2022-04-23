import React, { useState } from 'react';
import Phone from './Phone/Phone';
import Email from './Email/Email';
import styles from './StepPhoneEmail.module.css';

const phoneEmailMap = {
    phone: Phone,
    email: Email,
};

const StepPhoneEmail = ({ onNext }) => {
    const [type, setType] = useState('phone');
    const Component = phoneEmailMap[type];

    return (
        <>
            <div className={styles.cardWrapper}>
                <div>
                    <div className={styles.buttonWrap}>
                        <button onClick={() => setType('phone')} className={`${styles.tabButton} ${type === 'phone' ? styles.active : ''}`} >
                            <img src="/images/phone-white.png" alt="phone" />
                        </button>
                        <button onClick={() => setType('email')} className={`${styles.tabButton} ${type === 'email' ? styles.active : ''}`}  >
                            <img src="/images/mail-white.png" alt="email" />
                        </button>
                    </div>
                    <Component onNext={onNext} />
                </div>
            </div>
        </>
    );
};

export default StepPhoneEmail;