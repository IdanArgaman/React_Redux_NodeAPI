import React from 'react';
import classes from './ControlBar.css';

import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

import Select from '../UI/Select/Select';

const ControlBar = ( props ) => {
    return (
        <div className={classes.ControlBar}>
           <Button btnType="Primary" clicked={() => alert('Soon!')}>Create +</Button>
           <Input changed={props.onSearchTextChanged} 
           elementConfig={{
               "placeholder":"🔎 type to search"}}></Input>
            <Select options={[
                    {value:"",
                    text: "Filter by status"},
                    {value:"Working",
                    text: "Working"},
                    {value:"Vacation",
                    text: "On Vacation"},
                    {value:"Trip",
                    text: "Business Trip"},
                ]}
                onChange={props.onSearchStatusChanged}>
            </Select> 
        </div>
    );
};

export default ControlBar;