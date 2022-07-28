import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ select: false })
  isActivated: boolean;

  @Column()
  activationLink: string;

  @Column()
  age: string;

  @Column({default: 'user'})
  role: string;
}

export default User;