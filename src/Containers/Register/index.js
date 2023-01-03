
import { useState } from 'react';
import { Input, Button, Form } from 'antd-mobile';
import styles from './index.module.css';
import DatePickerInput from '@components/DatePickerInput';
import Header from '@components/Header';

const ACCOUNT_TYPE = {
    TEL: 'TEL',
    EMAIL: 'EMAIL',
};

const Register = () => {
    const [formData] = useState({
        name: '',
        tel: '',
        email: '',
        dob: '20220202',
    });

    const [accountType, setAccountType] = useState(ACCOUNT_TYPE.TEL);
    const onAccountTypeChange = () => {
        if (accountType === ACCOUNT_TYPE.TEL){
            setAccountType(ACCOUNT_TYPE.EMAIL);
            return;
        } 
        setAccountType(ACCOUNT_TYPE.TEL);
    }

    return <div>
        <Header/>
        <div className={styles.form}>
            <div className={styles.formTitle}>Create your account</div>
            <Form initialValues={formData} className={styles.formContainer}>
                <Form.Item name='name'>
                    <Input placeholder="Name" className={styles.input}/>
                </Form.Item>

                {accountType === ACCOUNT_TYPE.TEL && <Form.Item name = 'TEL' > <Input placeholder="Phone number" className={styles.input}/>
                </Form.Item>
                }
                {accountType === ACCOUNT_TYPE.EMAIL && <Form.Item name = 'EMAIL'> <Input placeholder="Email" className={styles.input}/>
                </Form.Item>
                }
                <div className={styles.changeEmailBtn} onClick={onAccountTypeChange}>
                    {accountType === ACCOUNT_TYPE.EMAIL ? "Use email instead" : "Use phone number"}
                </div>
                <div className={styles.DoB}>Date of Birth</div>
                <div>This will not be shown publicly. Confirm your own age, even if this accouont is for a business, a pet, or something else.</div>
                <Form.Item name='dob'>
                    <DatePickerInput/>
                </Form.Item>
            </Form>
        </div>
        <div className={styles.footer}>
            <Button className={styles.footerBtn}>Next</Button>
        </div>
    </div>;
};

export default Register;