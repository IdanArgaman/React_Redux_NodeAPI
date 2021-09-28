import React from 'react';

import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <h1>
        Employees
        </h1>  
    </div>
);

export default logo;