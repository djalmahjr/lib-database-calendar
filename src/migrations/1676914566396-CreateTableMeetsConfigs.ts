import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class CreateTableMeetsConfigs1676914566396
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'meets_configs',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'user_id',
            type: 'int'
          },
          {
            name: 'event_id',
            type: 'int'
          },
          {
            name: 'invite_id',
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
      'meets_configs',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE'
      })
    );
    await queryRunner.createForeignKey(
      'meets_configs',
      new TableForeignKey({
        columnNames: ['event_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'events',
        onDelete: 'CASCADE'
      })
    );
    await queryRunner.createForeignKey(
      'meets_configs',
      new TableForeignKey({
        columnNames: ['invite_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'invites',
        onDelete: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('meets_configs');
  }
}
