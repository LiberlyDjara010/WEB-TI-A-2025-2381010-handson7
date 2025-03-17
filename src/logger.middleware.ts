import { NestMiddleware, Logger } from '@nestjs/common';

export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);
  use(req: Request, res: any, next: (error?: any) => void) {
    switch (req.method) {
      case 'POST':
      case 'PUT':
        this.logger.log(`Request Body: ${JSON.stringify(req.body)}`);
        break;
      case 'GET':
      case 'DELETE':
        this.logger.log(`Request Param: ${JSON.stringify(req.body)}`);
        break;
      default:
        this.logger.log(
          'LoggerMiddleware: Request [${req.method}] default logging',
        );
    }
  }
}
