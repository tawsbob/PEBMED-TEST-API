import { Injectable, Inject } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Paciente } from './paciente.entity';

@Injectable()
export class PacienteService {
    
    constructor(
        @Inject('PACIENTE_REPOSITORY')
        private pacienteRepository: Repository<Paciente>,
      ) {
      }

    create(paciente: Paciente): Promise<Paciente> {
        return  this.pacienteRepository.save(
            this.pacienteRepository.create(paciente)
        )
    }

    read(id: string): Promise<Paciente[]> | Promise<Paciente> {
        return id ? this.pacienteRepository.findOne(id) : this.pacienteRepository.find()
    }

    update(paciente: Paciente): Promise<Paciente> {
        return this.pacienteRepository.save(paciente)
    }

    async delete(id: string){
        try {
            const result: DeleteResult = await this.pacienteRepository.delete(id)
            return (result.affected > 0)

        } catch(e){
            console.log(e)
            return false
        }
        return 
    }
}
