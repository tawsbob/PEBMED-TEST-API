import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PacienteController } from './paciente.controller';
import { PacienteService } from './paciente.service';
import { PacienteProvider } from './paciente.provider';

@Module({
imports: [DatabaseModule],
controllers: [PacienteController],
  providers: [...PacienteProvider, PacienteService]
})
export class PacienteModule {}
