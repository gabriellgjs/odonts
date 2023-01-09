import { IsNotEmpty } from 'class-validator';
import { Role } from 'src/app/entities/Role';

export class CreateEmployeeBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  birthDate: Date;

  @IsNotEmpty()
  rg: string;

  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  district: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  zipCode: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  telephone: string;

  @IsNotEmpty()
  admissionDate: Date;

  @IsNotEmpty()
  role: Role;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  passoword: string;
}
