import React from 'react';
import FontAwesome from 'react-fontawesome';
import style from './sideNav.css'
import {Link} from 'react-router-dom';


const SideNavItems = (props)=> {
    const items = [
        {
            type: style.option,
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: style.option,
            icon: 'file-text-o',
            text: 'News',
            link: '/news'
        },
        {
            type: style.option,
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        },
        {
            type: style.option,
            icon: 'sign-in',
            text: 'Sign in',
            link: '/sign-in'
        },
        {
            type: style.option,
            icon: 'sign-out',
            text: 'Sign out',
            link: '/sign-out'
        }
    ];

    const getItems = () => {
        return items.map((item, index) =>
            (<div key={index} className={style.option}>
                <Link to={item.link}></Link>
                <FontAwesome name={item.icon} />
                {item.text}
            </div>));
    }

    return (
        <div>
            <div className={style.option}>
               {getItems()}
            </div>
        </div>
    )
}

export default SideNavItems;