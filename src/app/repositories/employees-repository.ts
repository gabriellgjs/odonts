import { Employee } from '../entities/Employee';

export abstract class EmployeesRepository {
  abstract createPerson(employee: Employee): Promise<void>;
}
