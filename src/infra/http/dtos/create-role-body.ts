import { IsNotEmpty } from 'class-validator';

export class CreateRoleBody {
  @IsNotEmpty()
  name: string;
}
