import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Auth } from '../modules/auth/auth.entity.js';

export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as 'sqlite',
  database: './database.sqlite',
  synchronize: true,
  logging: false,
  entities: [Auth],
});
