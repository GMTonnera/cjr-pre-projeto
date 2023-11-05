import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Função que inicia o servidor       
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
