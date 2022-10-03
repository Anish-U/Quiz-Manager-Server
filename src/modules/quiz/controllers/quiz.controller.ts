import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { QuizService } from '../services/quiz.service';

import { Quiz } from '../entities/quiz.entity';

import { CreateQuizDto } from '../dto/create-quiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get('/')
  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizService.getAllQuiz();
  }

  @Get('/:id')
  async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
    return await this.quizService.getQuizById(id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() createQuizDto: CreateQuizDto): Promise<Quiz> {
    return this.quizService.createQuiz(createQuizDto);
  }
}
