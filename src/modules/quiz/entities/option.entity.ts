import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Question } from './question.entity';

import { Quiz } from './quiz.entity';

@Entity({ name: 'option' })
export class Option extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
  })
  text: string;

  @Column({
    type: 'boolean',
  })
  isCorrect: boolean;

  @ManyToOne(() => Question, (question) => question.options)
  question: Question;
}
