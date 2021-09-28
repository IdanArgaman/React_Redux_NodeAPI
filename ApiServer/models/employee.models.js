import {db} from '../db'
export class Employee {
    getEmployees() {
        return Promise.resolve(db);
    }

    updateEmployee(data) {
      let foundIdx = db.findIndex(e => e.id === data.id);

      if(foundIdx === -1) {
        throw new Error(`Employee not found. Employee ID: ${employee.id}`)
      }
     
      db[foundIdx] = {
        ...db[foundIdx],
        ...data
      }

      return Promise.resolve(db[foundIdx]); 
  }
}