import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common'

const logger = new Logger('Main')

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule,{
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://user:bitnami@172.29.53.227:5672/smartranking'],
      queue: 'admin-backend'
    },
  });

  app.useLogger(logger)
  
  await app.listen()
}
bootstrap();
