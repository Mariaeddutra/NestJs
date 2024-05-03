import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { usuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { Usuario, UsuarioSchema } from './schemaUsuario';

@Module({
  imports: [MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }])],
  controllers: [usuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}