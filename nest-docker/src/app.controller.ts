import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    return {
      message: '🚀 NestJS API Running in Docker!',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      endpoints: {
        users: '/users',
        userStats: '/users/stats',
        health: '/health',
      },
      documentation: 'Visit /users to interact with the API',
    };
  }

  @Get('health')
  getHealth(): object {
    return {
      status: 'healthy',
      service: 'NestJS API',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      version: process.version,
    };
  }
}
