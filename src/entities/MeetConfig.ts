import { Event } from './Event';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { User } from './User';
import { Invite } from './Invite';

@Entity()
export class MeetConfig extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: number;

  @Column()
  eventId!: number;

  @Column()
  inviteId!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  @ManyToOne(() => User, (user) => user.meetsConfigs)
  user!: User;

  @ManyToOne(() => Event, (user) => user.meetsConfigs)
  event!: Event;

  @ManyToOne(() => Invite, (user) => user.meetsConfigs)
  invite!: Invite;
}
