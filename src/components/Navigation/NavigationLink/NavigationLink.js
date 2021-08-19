import React from 'react';
import { string } from "prop-types";

import classes from './NavigationLink.module.css';

const NavigationLink = ({ href, icon, className, children }) => {
    return (
        <a href={href} className={`${classes.Wrapper} ${className}`}>
            <img alt="Icon" src={icon} />
            <div className={classes.Title}>{children}</div>
        </a>
    )
};

NavigationLink.propTypes = {
    href: string.isRequired,
    icon: string.isRequired,
    className: string
};

NavigationLink.defaultProps = {
    className: ''
};

export default NavigationLink;
