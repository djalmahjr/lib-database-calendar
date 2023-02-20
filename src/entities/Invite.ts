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

@Entity()
export class Invite extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Generated('uuid')
  guid!: string;

  @Column()
  email!: string;

  @Column()
  lastSendTime?: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  @OneToMany(() => MeetConfig, (meetsConfigs) => meetsConfigs.invite, {
    cascade: true
  })
  meetsConfigs?: MeetConfig[];
}
