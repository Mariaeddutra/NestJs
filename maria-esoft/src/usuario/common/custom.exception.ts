import { HttpException, HttpStatus } from "@nestjs/common";

export class CustomBadRequestException extends HttpException {
  constructor() {
    super('tenta de novo', HttpStatus.BAD_REQUEST);
  }
}