import React from 'react';

import classes from './NavigationHeader.module.css';
import logo from "../../../assets/logo.svg";
import NavigationLink from "../NavigationLink/NavigationLink";

const NavigationHeader = () => {
    return (
        <div className={classes.Wrapper}>
            <NavigationLink href="#" icon={logo} className={classes.Link}>
                Logo
            </NavigationLink>
        </div>
    )
};

export default NavigationHeader;
