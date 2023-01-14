import { IsNotEmpty } from 'class-validator';

export class FindUserByEmailBody {
  @IsNotEmpty()
  email: string;
}
