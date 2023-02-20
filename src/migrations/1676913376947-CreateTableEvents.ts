import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class CreateTableEvents1676913376947 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'events',
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
            name: 'title',
            type: 'varchar(255)'
          },
          {
            name: 'description',
            type: 'varchar(500)'
          },
          {
            name: 'start_time',
            type: 'timestamp'
          },
          {
            name: 'end_time',
            type: 'timestamp'
          },
          {
            name: 'notification_time',
            type: 'timestamp',
            isNullable: true
          },
          {
            name: 'owner_id',
            type: 'int'
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
    await queryRunner.createForeignKey(
      'events',
      new TableForeignKey({
        columnNames: ['owner_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('events');
  }
}
