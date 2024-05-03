import { Injectable } from '@nestjs/common';
import { Usuario as UsuarioInterface } from './usario.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './schemaUsuario';

@Injectable()
export class UsuarioService {
  constructor (@InjectModel(Usuario.name)private usuarioModel: Model<Usuario>){}
  private readonly cats: Usuario[] = [];
    Usuario: any;

  create(Usuario: UsuarioInterface) {
    this.Usuario.push(Usuario);
  }

  findAll():UsuarioInterface[] {
    return this.Usuario;
  }
   findByEmail(email:string)
   {
   return this.usuarioModel.findOne({
    email
   });
   }
}