import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOptionDto } from '../dto/create-option.dto';
import { Option } from '../entities/option.entity';
import { Question } from '../entities/question.entity';

import { OptionRepository } from '../repositories/option.repository';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(OptionRepository)
    private optionRepository: OptionRepository,
  ) {}

  async createOption(
    createOptionDto: CreateOptionDto,
    question: Question,
  ): Promise<Option> {
    const option = await this.optionRepository.save({
      text: createOptionDto.text,
      isCorrect: createOptionDto.isCorrect,
    });

    question.options = [option, ...question.options];
    await question.save();

    return option;
  }
}
