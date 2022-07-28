import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Token {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  refreshToken: string;
}

export default Token;