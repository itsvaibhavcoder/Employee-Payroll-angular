import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';
import { loadEmployees, deleteEmployee } from '../employee.actions';
import { AppState } from '../app.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  employees$: Observable<Employee[]>;
  filteredEmployees: Employee[] = [];
  searchText: string = '';
  ngOnit(){
    this.employees$.subscribe(data => {
      console.log(data); 
    });
  }
  constructor(private store: Store<AppState>) {
    this.employees$ = this.store.select(state => state.employee.employees);
    this.employees$.subscribe(employees => {
      this.filteredEmployees = employees;
    });
    this.store.dispatch(loadEmployees());
    this.employees$.subscribe(employees => {
      console.log(employees);
  });
}

  onDelete(id: number) {
    this.store.dispatch(deleteEmployee({ id }));
  }
}
