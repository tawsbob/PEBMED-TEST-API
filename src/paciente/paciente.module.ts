import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PacienteController } from './paciente.controller';
import { PacienteService } from './paciente.service';
import { PacienteProvider } from './paciente.provider';
import { ConsultaModule } from 'src/consulta/consulta.module';

@Module({
imports: [DatabaseModule, ConsultaModule],
controllers: [PacienteController],
  providers: [...PacienteProvider, PacienteService]
})
export class PacienteModule {}
