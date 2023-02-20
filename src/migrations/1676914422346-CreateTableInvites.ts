import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableInvites1676914422346 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'invites',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'guid',
            type: 'varchar',
            isUnique: true,
            generationStrategy: 'uuid'
          },
          {
            name: 'email',
            type: 'varchar(255)'
          },
          {
            name: 'last_send_time',
            type: 'timestamp',
            isNullable: true
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true
          }
        ]
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('invites');
  }
}
