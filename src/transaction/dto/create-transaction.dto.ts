import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  title: string;

  @IsNotEmpty()
  @IsString()
  value: string;

  @IsNotEmpty()
  @IsString()
  type: string;
}
