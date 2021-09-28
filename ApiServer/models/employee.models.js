import {db} from '../db'

export class Employee {
    getEmployees() {
        return Promise.resolve(db);
    }

    updateEmployee(data) {
      let found = db.find(e => e.id === data.id);

      if(!found) {
        throw new Error(`Employee not found. Employee ID: ${employee.id}`)
      }
     
      found = {
        ...found,
        ...data
      };

      db.forEach(employee => {
        if(employee.id === found.id) {
          employee = {
            ...employee,
            ...found
          }
        }
      })

      return Promise.resolve(found);
  }
}