import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees: Employee[], searchText: string): Employee[] {
    if (!employees || !searchText) {
      return employees;
    }

    const lowerCaseSearchText = searchText.toLowerCase();

    return employees.filter(employee => 
      employee.name.toLowerCase().includes(lowerCaseSearchText) ||
      (employee.department && employee.department.some(dep => dep.toLowerCase().includes(lowerCaseSearchText)))
    );
  }
}
