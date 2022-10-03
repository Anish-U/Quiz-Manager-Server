import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({
    message: 'Quiz Title cannot be empty',
  })
  @Length(3, 255)
  title: string;

  @IsNotEmpty({
    message: 'Quiz Description cannot be empty',
  })
  @Length(3)
  description: string;
}
