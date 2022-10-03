import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Question } from './question.entity';

@Entity({ name: 'quiz' })
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
  })
  title: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  isActive: boolean;

  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];
}
