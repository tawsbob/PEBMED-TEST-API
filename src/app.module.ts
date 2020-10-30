import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';

@Module({
  imports: [ConfigModule.forRoot(), PacienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
