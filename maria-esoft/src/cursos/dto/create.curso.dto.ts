import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateCourseDto {
  
  @IsString()
  @IsNotEmpty()
  nome: string;
  
  @IsNumber()
  @Min(1)
  valor: number;
  
  @IsNumber()
  duracao: number;
  
  alunos: string[];
}