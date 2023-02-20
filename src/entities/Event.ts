import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Generated,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { MeetConfig } from './MeetConfig';
import { User } from './User';

@Entity()
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Generated('uuid')
  guid!: string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  startTime!: Date;

  @Column()
  endTime!: Date;

  @Column()
  ownerId!: number;

  @Column()
  notificationTime?: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  @ManyToOne(() => User, (user) => user.events)
  owner!: User;

  @OneToMany(() => MeetConfig, (meetsConfigs) => meetsConfigs.event, {
    cascade: true
  })
  meetsConfigs?: MeetConfig[];
}
