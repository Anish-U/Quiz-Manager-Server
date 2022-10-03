import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'quizmanager',
  entities: [__dirname + '/../**/*.entity{}.ts,.js}'],
  synchronize: true,
};
