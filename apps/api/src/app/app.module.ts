import { Module } from '@nestjs/common';
import { QuestionManagementModule } from './question-management/question-management.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AnswerModule } from './answers/answer.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: parseInt(configService.get('DATABASE_PORT'), 10),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [],
        synchronize: configService.get('PRODUCTION_FLAG') === 'false',
        autoLoadEntities: configService.get('PRODUCTION_FLAG') === 'false',
      }),
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    QuestionManagementModule,
    UsersModule,
    AuthModule,
    AnswerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
