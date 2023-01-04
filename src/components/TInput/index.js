import { PropTypes } from 'prop-types';
import style from './index.module.scss';
import { Input } from 'antd-mobile';
import { useState } from 'react';
/**
 * interactive input
 */

const TInput = ({
    label,
    value,
    length,
    onChange,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hide, setHide] = useState(false);
    const onFocus = () => {
        setIsFocused(true);
        setHide(true);
    };

    const onBlur = () => {
        if (!value || value.length === 0 ) {
            setIsFocused(false);
            setHide(false);
            return;
        }
        setHide(false);
    };

    const onChangeHandler = (val) => {
        if (length && val.length > length){
            return;
        }
        onChange(val);
    }

    return <div className={hide ? style.tInputFocused : style.tInput}>
        <div className={ isFocused ? style.labelFocuses : style.label}>
            {label}
            {hide && length && (<span className={style.labelRight}>
                {value.length}/{length}
            </span>)}
        </div>
        <Input className={isFocused ? style.inputItemFocused : style.inputItem} 
               onFocuse={onFocus} 
               onBlur = {onBlur} 
               value = {value}
               onChange={onChangeHandler}
               />
    </div>
};
TInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    length: PropTypes.number,
    onChange: PropTypes.func,
};

TInput.defaultProps = {
    label: '',
    value: undefined,
    length: undefined,
    onChange: () => {},
};


export default TInput;