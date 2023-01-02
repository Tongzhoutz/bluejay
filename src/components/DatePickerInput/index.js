import styles from './index.module.css';
import datePickerIcon from '../../assets/datePicker-icon.svg';

export default  () => (<div className={styles.birthdayInput}>
                <div className={styles.dobPlaceHolder}>date of birth</div>
                <div>
                    <span className={styles.yymmdd}>YY/MM/DD</span>
                    <img className={styles.datePickerIcon} src={datePickerIcon} />
                </div>
            </div>);