import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Quiz } from '../entities/quiz.entity';
import { QuizRepository } from '../repositories/quiz.repository';

import { CreateQuizDto } from '../dto/create-quiz.dto';
import { Question } from '../entities/question.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
  ) {}

  async getAllQuiz(): Promise<Quiz[]> {
    const quizArray = await this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt')
      .getMany();

    if (!quizArray) {
      throw new NotFoundException(`No quiz found`);
    }

    return quizArray;
  }

  async getQuizById(id: number): Promise<Quiz> {
    const quiz = await this.quizRepository.findOne(id, {
      relations: ['questions', 'questions.options'],
    });

    if (!quiz) {
      throw new NotFoundException(`Quiz with ID "${id}" not found`);
    }

    return quiz;
  }

  async createQuiz(createQuizDto: CreateQuizDto): Promise<Quiz> {
    const quiz = await this.quizRepository.save(createQuizDto);

    return quiz;
  }
}
