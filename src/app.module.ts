import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';
import { ConsultaModule } from './consulta/consulta.module';

@Module({
  imports: [ConfigModule.forRoot(), PacienteModule, ConsultaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
