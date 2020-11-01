import { Controller, Post, Put, Get, Delete, Param, Body} from '@nestjs/common';
import { PacienteService } from './paciente.service'
import { ConsultaService } from '../consulta/consulta.service'
import { Paciente } from './paciente.entity';
import { bad_request, DeletedResult } from '../helpers'
  

@Controller('paciente')
export class PacienteController {
    constructor(
        private pacienteService: PacienteService,
        private consultaService: ConsultaService,
      ){

      }

    @Post()
    async create(@Body() _Paciente: Paciente): Promise<Paciente>{
        try {

            return await this.pacienteService.create( _Paciente)

        } catch(e){
            throw bad_request(e)
        }
    }

    @Put()
    async update(@Body() _Paciente: Paciente): Promise<Paciente>{
        try {
            
            return await this.pacienteService.update(_Paciente)

        } catch(e) {
            throw bad_request(e)
        }
    }

    @Get(':id?')
    async read(@Param('id') id: string = null ): Promise<Paciente[]|Paciente> {
        try {
            return await this.pacienteService.read(id)
        } catch (e) {
            throw bad_request(e)
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<DeletedResult>{
        try {
            
            //Ia fazer async mas para excluir o usuário tem que excluir todas as referências antes
            /*const [ a, b ] = await Promise.all([
                this.consultaService.deleteByPacienteId(id),
                this.pacienteService.delete(id)
            ])*/

            const consultasDeleted = await this.consultaService.deleteByPacienteId(id)
            const pacideleted = await this.pacienteService.delete(id)
            const deleted = consultasDeleted && pacideleted
            
            const result: DeletedResult = { deleted } 

            return result

        } catch(e) {
            throw bad_request(e)
        }
    }
}
