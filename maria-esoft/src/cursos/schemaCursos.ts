import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Usuario } from '../usuario/schemaUsuario';
export type CursosDocument = HydratedDocument<Cursos>;

@Schema()
export class Cursos {
  @Prop(({ required: true }))
  name: string;

  @Prop(({ required: true }))
  valor: number;

  @Prop(({ required: true }))
  tempo:number;

  @Prop(({ required: true }))
  alunos:string;

}

export const CatSchema = SchemaFactory.createForClass(Cursos);