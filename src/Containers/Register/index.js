
import { useState } from 'react';
import { Input, Button, Form } from 'antd-mobile';
import styles from './index.module.scss';
import DatePickerInput from '@components/DatePickerInput';
import Header from '@components/Header';
import TInput from '@components/TInput';

const ACCOUNT_TYPE = {
    TEL: 'tel',
    EMAIL: 'email',
};

const Register = () => {
    const [form] = Form.useForm();
    const [formData] = useState({
        name: '',
        tel: '',
        email: '',
        dob: '20220203',
    });

    const [accountType, setAccountType] = useState(ACCOUNT_TYPE.TEL);
    const onAccountTypeChange = () => {
        if (accountType === ACCOUNT_TYPE.TEL){
            setAccountType(ACCOUNT_TYPE.EMAIL);
            return;
        } 
        setAccountType(ACCOUNT_TYPE.TEL);
    }

    const onClickNextStep = async () => {
        const validate = await form.validateFields();
        if (validate) {
            console.log(validate);
        }
    }

    return <div>
        <Header/>
        <div className={styles.form}>
            <div className={styles.formTitle}>Create your account</div>
            <Form initialValues={formData} form={form} className={styles.formContainer}>
                <Form.Item name='name' rules = {[{ required: true, message: "Name is blank!" }]}>
                    <TInput length={50} label="Name" />
                </Form.Item>

                {accountType === ACCOUNT_TYPE.TEL && (
                <Form.Item name = "tel" rules={[{required: true, message: "Phone number is blank!"}]} > 
                    <TInput length={11} label="Phone number" />
                </Form.Item>
                )}

                {accountType === ACCOUNT_TYPE.EMAIL && (
                <Form.Item name = "email" rules={[{required: true, message: "email is blank!"}]}> 
                    <Input placeholder="Email" className={styles.input}/>
                </Form.Item>
                )}
                <div className={styles.changeEmailBtn} onClick={onAccountTypeChange}>
                    {accountType === ACCOUNT_TYPE.TEL ? "Use email instead" : "Use phone number"}
                </div>
                <div className={styles.DoB}>Date of Birth</div>
                <div>This will not be shown publicly. Confirm your own age, even if this accouont is for a business, a pet, or something else.</div>
                <Form.Item name='dob'>
                    <DatePickerInput />
                </Form.Item>
            </Form>
        </div>
        <div className={styles.footer}>
            <Button className={styles.footerBtn} onClick={onClickNextStep}>Next</Button>
        </div>
    </div>;
};

export default Register;