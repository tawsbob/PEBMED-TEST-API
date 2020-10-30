import { ConfigModule, ConfigService  } from '@nestjs/config';
import { createConnection } from 'typeorm';
import * as path from 'path';

export const databaseProviders = [
    {   
        provide: 'DATABASE_CONNECTION',
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => await createConnection({
          type: 'postgres',
          host: configService.get('DB_HOST'),
          database: configService.get('DB_DATABASE'),
          username: configService.get('DB_USER'),
          password: configService.get('DB_PASSWORD'),
          port: parseInt(
              configService.get('DB_PORT')
              ),
          entities: [ path.join(__dirname, '../**/*.entity.{js,ts}') ],
          synchronize: true,
        })
      }
];