import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Auth {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text'})
  email!: string;

  @Column({ type: 'text'})
  password!: string;

  @Column({ type: 'text'})
  name!: string;
}
