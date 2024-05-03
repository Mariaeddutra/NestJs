import { Module, MiddlewareConsumer, NestMiddleware } from '@nestjs/common';
import { UsuarioService } from './usuario/usuario.service';
import { usuarioController } from './usuario/usuario.controller';
import { UsuarioMiddleware } from './usuario.middleware';
import { CursoService } from './cursos/cursos.service';
import { CursosController } from './cursos/cursos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioModule } from './usuario.module';


@Module({
 imports: [MongooseModule.forRoot('mongodb://localhost/Maria-Esoft'),UsuarioModule],
  controllers: [ CursosController ],
  providers: [CursoService],
})
export class AppModule {}
