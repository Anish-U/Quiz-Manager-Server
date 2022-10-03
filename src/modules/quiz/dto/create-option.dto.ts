import { BlobOptions } from 'buffer';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty({
    message: 'Option cannot be empty',
  })
  @Length(3, 255)
  text: string;

  @IsNotEmpty({
    message: 'Option correctness is required',
  })
  isCorrect: boolean;

  @IsNotEmpty({
    message: 'Question ID cannot be empty',
  })
  questionId: number;
}
