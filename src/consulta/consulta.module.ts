import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ConsultaService } from './consulta.service';
import { ConsultaController } from './consulta.controller';
import { ConsultaProvider } from './consulta.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ConsultaController],
  providers: [...ConsultaProvider, ConsultaService],
})
export class ConsultaModule {}
