import React from 'react';

import classes from './Select.css';

const select = (props) => (
    <select
        className={[classes.Select, props.isInline && classes.Inline].join(' ')}
        onChange={props.onChange}
        {...props.elementConfig}
        value={props.value}>
            {props.options.map((o,idx) => {
                    return <option key={idx} value={o.value}>{o.text}</option>
            })}
    </select>
);

export default select;