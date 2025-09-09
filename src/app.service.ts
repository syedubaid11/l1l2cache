import { Injectable } from '@nestjs/common';

interface Post{
  title: string;
  body: string;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPost(): Post {
    return {
      title: 'My first post',
      body: 'This is the body of my first post'
    };
  }
}
