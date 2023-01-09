import { IsNotEmpty } from 'class-validator';

export class CreateRoleBody {
  id?: string;

  @IsNotEmpty()
  name: string;
}
