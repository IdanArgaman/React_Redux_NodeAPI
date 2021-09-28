import React from 'react';
import classes from './Employee.css';
import girlLogo from '../../assets/images/girl.png';
import Select from '../UI/Select/Select';

const Employee = ( props ) => {
    return (
        <div className={classes.Employee}>
            <img src={girlLogo} alt="girl-avatar"></img>
            <div className={classes.Content}>
                <span className={classes.Name}>{props.employee.name}</span>
                <div>
                    <Select options={[
                        {value:"Working",
                        text: "Working"},
                        {value:"Vacation",
                        text: "On Vacation"},
                        {value:"Trip",
                        text: "Business Trip"},
                    ]}
                    isInline={true}
                    value={props.employee.status}
                    onChange={props.onStatusChanged}>
                    </Select> 
                </div>
            </div>
           
        </div>
    );
};

export default Employee;