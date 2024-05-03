import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usario.interface';
import { CustomBadRequestException } from './common/custom.exception';
import { CreateUserDto } from './dto/create.user.dto';


@Controller('usuario')
export class usuarioController {
  userService: any;
  @Post()
  async create(@Body() dto: CreateUserDto) {
    const user = await this.userService.create(dto)
    if(user === null) throw new CustomBadRequestException();
    return user;
  }
  @Get()
  findAll():  string {
    return 'Usuario Cadastrado';
  }
  
}
 

function findAll() {
  throw new Error('Function not implemented.');
}
