import { Controller, Get } from '@nestjs/common';
import { CursoService } from './cursos.service';
import { Cursos } from './cursos.interface';

@Controller('Curso')
export class CursosController {

 constructor(private UsuarioService: CursoService) {}

  @Get()
  findAll(): string {
    return 'Cursos cadastrado';

  }
}