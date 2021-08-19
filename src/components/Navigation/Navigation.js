import React from 'react';

import config from "./config";
import classes from './Navigation.module.css';
import NavigationHeader from "./NavigationHeader/NavigationHeader";
import NavigationFooter from "./NavigationFooter/NavigationFooter";
import NavigationTree from "./NavigationTree/NavigationTree";
import NavigationLink from "./NavigationLink/NavigationLink";

import myTasks from './my-tasks.svg';

const Navigation = () => {
    return (
        <div className={classes.Navigation}>
            <NavigationHeader />

            <div className={classes.NavigationContent}>
                <NavigationLink href="#" icon={myTasks} className={classes.MyTasks}>
                    My tasks
                </NavigationLink>

                <h3 className={classes.TreeTitle}>Dockets</h3>
                <NavigationTree config={config} />
            </div>

            <NavigationFooter/>
        </div>
    )
};

export default Navigation;
