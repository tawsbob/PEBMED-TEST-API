import { Injectable, Inject } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { Consulta } from './consulta.entity';
//import { Paciente } from '../paciente/paciente.entity';

@Injectable()
export class ConsultaService {
    constructor(
        @Inject('CONSULTA_REPOSITORY')
        private consultaRepository: Repository<Consulta>    
    ){}

    create(consulta: Consulta): Promise<Consulta> {
        return  this.consultaRepository.save(
            this.consultaRepository.create(consulta)
        )
    }
    
    read(id: string): Promise<Consulta[]> | Promise<Consulta> {
        return id ? this.consultaRepository.findOne(id) : this.consultaRepository.find({ relations: ["paciente"] })
    }

    getByPacienteId(id: string): Promise<Consulta[]> {
        return this.consultaRepository.find({ where: { paciente: { id } } })
    }

    update(paciente: Consulta): Promise<Consulta> {
        return this.consultaRepository.save(paciente)
    }

    async delete(id: string){
        try {
            const result: DeleteResult = await this.consultaRepository.delete(id)
            return (result.affected > 0)

        } catch(e){
            console.log(e)
            return false
        } 
    }

    async deleteByPacienteId(pacienteId: string){
        try{
            const [ _, affected ] = await this.consultaRepository.query(`DELETE FROM consulta where "pacienteId" = $1`, [pacienteId])
            return (affected > 0)

        } catch(e){
            console.log(e)
            return false
        }
    }

    
}
