import { Event } from './Event';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { MeetConfig } from './MeetConfig';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Generated('uuid')
  guid!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  @OneToMany(() => Event, (event) => event.owner, {
    cascade: true
  })
  events?: Event[];

  @OneToMany(() => MeetConfig, (meetsConfigs) => meetsConfigs.user, {
    cascade: true
  })
  meetsConfigs?: MeetConfig[];
}
