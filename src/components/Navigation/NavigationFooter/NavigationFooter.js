import React from 'react';

import classes from './NavigationFooter.module.css';
import logout from './logout.svg';

const NavigationFooter = () => {
    /* eslint-disable jsx-a11y/anchor-is-valid */
    return (
        <div className={classes.Wrapper}>
            <a href="#">
                <img alt="Logout icon" src={logout} />
            </a>
        </div>
    )
};

export default NavigationFooter;
