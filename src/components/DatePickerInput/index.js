import styles from './index.module.css';
import datePickerIcon from '@assets/datePicker-icon.svg';
import { DatePicker } from 'antd-mobile';
import { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-anonymous-default-export
const DatePickerInput =  ({
    value, 
    onChange
}) => {
const [visible, setVisible] = useState(false);
const [curDate, setCurDate] = useState();

const onClickDatePicker = () => {
    setVisible(true);
}
return (
    <>
        <DatePicker
            title='Date of Birth'
            visible={visible}
            onClose={() => {
                setVisible(false)
            }}
            onConfirm={ (val) => {
                onChange(val);
            }}
        />
            
            <div className={styles.birthdayInput} onClick={onClickDatePicker}>
                <div className={styles.dobPlaceHolder}>date of birth</div>
                <div>
                    <span className={styles.yymmdd}>{value ? moment(value).format('YYYY-MM-DD') : 'YY/MM/DD'  }</span>
                    <img className={styles.datePickerIcon} src={datePickerIcon} />
                </div>
            </div>
    </>)};
DatePickerInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
export  default DatePickerInput;