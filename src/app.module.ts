import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';
import { QuizModule } from './modules/quiz/quiz.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), QuizModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
