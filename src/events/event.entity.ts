import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column()
  location: string;

  @Column()
  capacity: number;

  @Column({ type: 'decimal', nullable: true })
  price: number;

  @Column('text', { array: true, nullable: true })
  convenant: string[];
}
