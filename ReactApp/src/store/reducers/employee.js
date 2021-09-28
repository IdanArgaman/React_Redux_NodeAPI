import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    employees: [],
    filter: {
        text: null,
        status: null
    },
    loading: false,
};

const fetchEmployeesStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchEmployeesSuccess = ( state, action ) => {
    return updateObject( state, {
        employees: action.employees,
        loading: false
    } );
};

const fetchEmployeesFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const setFliter = ( state, action ) => {
    return updateObject( state, { filter: { 
        ...state.filter,
        ...action.filter 
    }});
}

const updateEmployee = (state, action) => {
    const employees = state.employees.map(employee => {
        if(employee.id === action.employee.id) {
            return {
                ...employee,
                ...action.employee
            }
        }

        return employee;
    });

    return updateObject( state,  { employees });
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_EMPLOYEES_START: return fetchEmployeesStart( state, action );
        case actionTypes.FETCH_EMPLOYEES_SUCCESS: return fetchEmployeesSuccess( state, action );
        case actionTypes.UPDATE_EMPLOYEE_FAIL: return fetchEmployeesFail( state, action );
        case actionTypes.SET_FILTER: return setFliter( state, action );
        case actionTypes.UPDATE_EMPLOYEE: return updateEmployee( state, action );
        default: return state;
    }
};

export default reducer;