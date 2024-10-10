import { createReducer, on } from '@ngrx/store';
import { Employee } from '../app/models/employee.model';
import * as EmployeeActions from './employee.actions';

export interface EmployeeState {
  employees: Employee[];
  error: string | null;
}

export const initialState: EmployeeState = {
  employees: [],
  error: null
};

export const employeeReducer = createReducer(
  initialState,
  on(EmployeeActions.loadEmployeesSuccess, (state, { employees }) => ({ ...state, employees })),
  on(EmployeeActions.addEmployeeSuccess, (state, { employee }) => ({
    ...state,
    employees: [...state.employees, employee],
  })),
  on(EmployeeActions.updateEmployeeSuccess, (state, { employee }) => ({
    ...state,
    employees: state.employees.map(emp => emp.id === employee.id ? employee : emp),
  })),
  on(EmployeeActions.deleteEmployeeSuccess, (state, { id }) => ({
    ...state,
    employees: state.employees.filter(emp => emp.id !== id),
  }))
);
