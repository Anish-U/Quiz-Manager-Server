import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CreateQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';
import { QuestionService } from '../services/question.service';
import { QuizService } from '../services/quiz.service';

@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}

  @Get('/:id')
  async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Question> {
    return await this.questionService.getQuestionById(id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async createQuestion(@Body() createQuestionDto: CreateQuestionDto) {
    const quiz = await this.quizService.getQuizById(createQuestionDto.quizId);

    return await this.questionService.createQuestion(createQuestionDto, quiz);
  }
}
