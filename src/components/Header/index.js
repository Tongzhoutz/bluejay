import { CloseOutline } from 'antd-mobile-icons';
import logo from '@assets/bluejay-logo.svg';
import styles from './index.module.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
        <div className={styles.header}>
            <CloseOutline className={styles.closeIcon} />
            <img src={logo} alt="twitter" className={styles.twitterLogo} />

        </div>);