import { User } from './entities/User';
import { Event } from './entities/Event';
import { Invite } from './entities/Invite';
import { MeetConfig } from './entities/MeetConfig';
import { DataSource } from 'typeorm';
import dataSource from './config';

const connection = () =>
  dataSource.initialize().then(async (pool: DataSource) => {
    await pool.runMigrations();
    console.log('Connected in database with success.');

    return pool;
  });

export { dataSource, connection, User, Event, Invite, MeetConfig };
