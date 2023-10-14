import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from '../../book/entities/book.entity';
import { JoinColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @OneToOne(() => Book, (book) => book.user)
  @JoinColumn()
  book: Book;
}
