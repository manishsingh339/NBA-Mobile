import React from 'react';
import {CURRENT_YEAR} from '../../config';
import {Link} from 'react-router-dom';
import styles from './footer.css';

const Footer = ()=> {
    return (
        <div className={styles.footer}>
            <Link to="/" className={styles.logo}>
                <img src="/images/nba_logo.png" alt="NBA Logo" />
            </Link>
            <div className={styles.right}>
                @NBA {CURRENT_YEAR} All rights reserved.
            </div>
        </div>
    )
}

export default Footer;