import { Injectable } from '@nestjs/common';
import { Cursos } from './cursos.interface';


@Injectable()
export class CursoService {
  
  private readonly Curso: Cursos[] = [];

  create(Cursos: Cursos) {
    this.Curso.push(Cursos);
  }

  findAll(): Cursos[] {
    return this.Curso;
  }
}
