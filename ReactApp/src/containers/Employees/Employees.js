import React, { Component } from 'react';
import { connect } from 'react-redux';

import Employee from '../../components/Employee/Employee';

import axios from '../../axios-employees';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

import classes from './Employees.css';

class Employees extends Component {
    componentDidMount () {
        this.props.onFetchEmployees();
    }
    
    onStatusChanged(employeeId, status) {
        this.props.onUpdateEmployee({ id: employeeId, status})
    }

    render () {
        let employees = <Spinner />;

        if ( !this.props.loading ) {
            let result = this.props.employees;

            if(this.props.filter.text) {
                result = this.props.employees.filter(employee => 
                    employee.name.toLowerCase().includes(this.props.filter.text.toLowerCase()))
            }

            if(this.props.filter.status) {
                result = result.filter(employee => 
                    employee.status.toLowerCase() === this.props.filter.status.toLowerCase())
            }

            employees = 
                result.map( employee => (
                <Employee
                    key={employee.id}
                    employee={employee}
                    onStatusChanged={(e) => this.onStatusChanged(employee.id, e.target.value)}
                />
            ))
        }
        return (
            <div className={classes.Employees}>
                {employees}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        filter: state.employee.filter,
        employees: state.employee.employees,
        loading: state.employee.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchEmployees: () => dispatch( actions.fetchEmployees() ),
        onUpdateEmployee: (employee) => dispatch( actions.updateEmployee(employee) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( Employees, axios ) );