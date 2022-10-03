import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateOptionDto } from '../dto/create-option.dto';

import { OptionService } from '../services/option.service';
import { QuestionService } from '../services/question.service';

@Controller('option')
export class OptionController {
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async createQuestion(@Body() createOptionDto: CreateOptionDto) {
    const question = await this.questionService.getQuestionById(
      createOptionDto.questionId,
    );

    return await this.optionService.createOption(createOptionDto, question);
  }
}
