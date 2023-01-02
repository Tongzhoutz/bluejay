
import { Input, Button } from 'antd-mobile';
import styles from './index.module.css';
import DatePickerInput from '../../components/DatePickerInput';
import Header from '../../components/Header';

const Register = () => {
    return <div>
        <Header/>
        <div className={styles.form}>
            <div className={styles.formTitle}>Create your account</div>
            <Input placeholder="Name" className={styles.input}/>
            <Input placeholder="Phone number" className={styles.input}/>
            <div className={styles.changeEmailBtn}>Use email instead</div>
            <div className={styles.DoB}>Date of Birth</div>
            <div>This will not be shown publicly. Confirm your own age, even if this accouont is for a business, a pet, or something else.</div>
            <DatePickerInput/>
        </div>
        <div className={styles.footer}>
            <Button className={styles.footerBtn}>Next</Button>
        </div>
    </div>;
};

export default Register;