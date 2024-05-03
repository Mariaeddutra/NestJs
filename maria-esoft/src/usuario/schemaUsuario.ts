import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Cursos } from '../cursos/schemaCursos';
export type UsuarioDocument = HydratedDocument<Usuario>;


@Schema()
export class Usuario {
  @Prop(({ required: true }))
  name: string;

  @Prop(({ required: true }))
  sobrenome: string;

  @Prop(({ required: true }))
  email: string;

  @Prop(({ required: true }))
  senha:string

}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);