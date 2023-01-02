import { Employee } from '../entities/Employee';

export abstract class EmployeesRepository {
  abstract create(employee: Employee): Promise<void>;
}
