import { Module } from '@nestjs/common';
import { usuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { Usuario,UsuarioSchema, UsuarioDocument } from './usuario/schemaUsuario';
import { Connection } from 'mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: Usuario.name ,schema: UsuarioSchema}])],
  controllers: [usuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}