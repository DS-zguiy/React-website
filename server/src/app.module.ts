import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SourceModule } from './source/source.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import config from 'src/config';
import { modelConfigProviders } from './config/configToken';
import { join } from 'path';
import { CategoryModule } from './category/category.module';
import { ContentModule } from './content/content.module';
@Module({
  imports: [
    SourceModule,
    CategoryModule,
    ContentModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [...config],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      renderPath: '/',
      exclude: ['/api*'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      username: 'root',
      password: 'root',
      host: 'localhost',
      port: 3306,
      database: 'react_nav',
      synchronize: true,
      retryDelay: 500,
      retryAttempts: 10,
      autoLoadEntities: true,
      timezone: '08:00',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ...modelConfigProviders], //配置配置文件的依赖注入
})
export class AppModule {}
