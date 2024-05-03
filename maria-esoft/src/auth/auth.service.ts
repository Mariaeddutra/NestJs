import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsuarioService } from "src/usuario/usuario.service";
import { JwtService } from "@nestjs/jwt";
import { UserLoginDto } from "./dto/login.dto";
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private userService: UsuarioService,
    private jwtService: JwtService

  ) {}

  async signIn(loginDto: UserLoginDto): Promise<any> {
    const user = await this.userService.findByEmail(loginDto.email);
    const isMatch = await bcrypt.compare(loginDto.senha, user?.senha);
    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email, nome: user.name, sobrenome: user.sobrenome };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}