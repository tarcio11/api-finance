import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateCreateAccountDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 20)
  password: string;
}
