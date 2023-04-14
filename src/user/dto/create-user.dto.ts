import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  first_name: string;

@IsNotEmpty()
  last_names: string;

@IsNotEmpty()
@IsEmail()
  email: string;

@IsNotEmpty()
@MinLength (8)

  password: string;

}