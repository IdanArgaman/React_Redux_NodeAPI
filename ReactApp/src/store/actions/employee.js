import * as actionTypes from './actionTypes';
import axios from '../../axios-employees';

export const fetchEmployeesSuccess = ( employees ) => {
    return {
        type: actionTypes.FETCH_EMPLOYEES_SUCCESS,
        employees: employees
    };
};

export const fetchEmployeesFail = ( error ) => {
    return {
        type: actionTypes.FETCH_EMPLOYEES_FAIL,
        error: error
    };
};

export const fetchEmployeesStart = () => {
    return {
        type: actionTypes.FETCH_EMPLOYEES_START
    };
};

export const setFilter = (filter) => {
    return {
        type: actionTypes.SET_FILTER,
        filter: filter
    };
}

export const updateEmployeeFail = (error) => {
    return {
        type: actionTypes.FETCH_EMPLOYEES_FAIL,
        error
    };
}

export const updateEmployee = (employee) => {
    return dispatch => {
        axios.put(`employees/${employee.id}`, employee)
            .then( res => {
                dispatch({
                    type: actionTypes.UPDATE_EMPLOYEE,
                    employee
                });
            })
            .catch( err => {
                dispatch(updateEmployeeFail(err));
            });
    };
}

export const fetchEmployees = () => {
    return dispatch => {
        dispatch(fetchEmployeesStart());
        axios.get('employees')
            .then( res => {
                const fetchedEmployees = res.data;
                dispatch(fetchEmployeesSuccess(fetchedEmployees));
            } )
            .catch( err => {
                dispatch(fetchEmployeesFail(err));
            } );
    };
};