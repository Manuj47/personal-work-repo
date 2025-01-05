import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'bazar',
  entities: ['dist/**/*.entity{.js,ts}'],
  migrations: ['dist/db/migrations/*{.ts,.js}'],
  synchronize: false,
  logging: false,
});
