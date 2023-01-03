import styles from './index.module.scss';
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

const onClickDatePicker = () => {
    setVisible(true);
}
return (
    <>
        <DatePicker
            title='Date of Birth'
            visible={visible}
            onClose={() => {
                setVisible(false);
            }}
            onConfirm={ (val) => {
                onChange(moment(val).format('YYYYMMDD'));
            }}
        />
            
            <div className={styles.birthdayInput} onClick={onClickDatePicker}>
                <div className={styles.dobPlaceHolder}>date of birth</div>
                <div>
                    <span className={styles.yymmdd}>{value ? moment(value).format('YYYYMMDD') : 'YY/MM/DD'  }</span>
                    <img className={styles.datePickerIcon} src={datePickerIcon} />
                </div>
            </div>
    </>)};
DatePickerInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
export  default DatePickerInput;