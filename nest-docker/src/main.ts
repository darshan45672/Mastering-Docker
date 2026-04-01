import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for cross-origin requests
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Set global API prefix
  app.setGlobalPrefix('api');

  // Get port from environment or default to 3000
  const port = process.env.PORT || 3000;

  // Listen on all interfaces (important for Docker)
  await app.listen(port, '0.0.0.0');
  
  console.log(`🚀 NestJS Application is running on: http://0.0.0.0:${port}/api`);
  console.log(`📖 API Documentation available at: http://0.0.0.0:${port}/api`);
  console.log(`🔍 Health check at: http://0.0.0.0:${port}/api/health`);
  console.log(`👥 Users API at: http://0.0.0.0:${port}/api/users`);
}
bootstrap();
