import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as EmployeeActions from '../employee.actions';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      profile: ['', Validators.required],
      gender: ['', Validators.required],
      department: this.fb.array([]), 
      salary: ['', Validators.required],
      startDate: this.fb.group({
        day: ['', Validators.required],
        month: ['', Validators.required],
        year: ['', Validators.required]
      }),
      notes: ['']
    });
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.registerForm.get('department') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } 
    else {
      const index = checkArray.controls.findIndex(item => item.value === e.target.value);
      checkArray.removeAt(index);
    }
  }
  onSubmit() {
    if (this.registerForm.valid) {
      console.log("Form is valid");
      const newEmployee: Employee = this.registerForm.value;
      this.store.dispatch(EmployeeActions.addEmployee({ employee: newEmployee }));
      this.registerForm.reset();
      this.router.navigate(['/dashboard']);
    }
    else{
      console.log("Form is invalid");
    }
  }

  onReset() {
    this.registerForm.reset();
  }
}
