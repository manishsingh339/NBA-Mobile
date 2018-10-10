import React from 'react';
import style from './header.css';
import {Link} from 'react-router-dom';
import SideNav from '../sideNav/sideNav'

import FontAwesome from 'react-fontawesome';

const Header = (props) => {
    
    const log = () => (
        <Link to="/" className={style.logo}>
            <img src="/images/nba_logo.png" alt="NBA Logo" />
        </Link>
    )

    const navBars = ()=> (
        <div className={style.bars}>
            <FontAwesome name="bars" 
                onClick={props.onOpenNav}
                style={{
                    color: '#dfdfdf',
                    padding: '10px',
                    cursor: 'pointer'
                }} 
            />
        </div>
    )

    return (
        <header className={style.header}>
            <SideNav {...props} />
            <div className={style.headerOpt}>
                {navBars()}
                {log()}
            </div>
        </header>
    )
}

export default Header;