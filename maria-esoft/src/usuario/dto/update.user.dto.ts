import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto {
  
  @IsString()
  @IsNotEmpty()
  nome: string;
  
  @IsString()
  @IsNotEmpty()
  sobrenome: string;
  
  @IsEmail()
  @IsNotEmpty()
  email: string;
}