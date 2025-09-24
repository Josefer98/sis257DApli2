import { Injectable, Post } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  saludo(): string {
    return 'Post: holas SIS257';
  }
}
