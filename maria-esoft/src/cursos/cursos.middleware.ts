import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';


@Injectable()
export class CursoMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    req.body.valor = req.body.valor * 0.5;
    next();
  }
}
