import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty({
    message: 'Question cannot be empty',
  })
  @Length(3, 255)
  question: string;

  @IsNotEmpty({
    message: 'Quiz ID cannot be empty',
  })
  quizId: number;
}
