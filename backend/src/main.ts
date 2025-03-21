import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  const config = new DocumentBuilder()
    .setTitle('SoftPet API')
    .setDescription('API para gerenciamento de pets')
    .setVersion('1.0')
    .addTag('pets')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document)

  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT || 3001)
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();