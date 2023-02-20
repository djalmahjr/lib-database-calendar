import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableUsers1676912964065 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
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
            type: 'varchar(255)',
            isUnique: true
          },
          {
            name: 'password',
            type: 'varchar(255)'
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
    await queryRunner.dropTable('users');
  }
}
