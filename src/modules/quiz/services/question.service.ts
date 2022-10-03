import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { QuestionRepository } from '../repositories/question.repository';

import { CreateQuestionDto } from '../dto/create-question.dto';
import { Quiz } from '../entities/quiz.entity';
import { Question } from '../entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
  ) {}

  async getQuestionById(id: number) {
    const question = await this.questionRepository.findOne(id, {
      relations: ['quiz', 'options'],
    });

    if (!question) {
      throw new NotFoundException(`Question with ID "${id}" not found`);
    }

    return question;
  }

  async createQuestion(
    createQuestionDto: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const question = await this.questionRepository.save({
      question: createQuestionDto.question,
    });

    quiz.questions = [question, ...quiz.questions];
    await quiz.save();

    return question;
  }
}
