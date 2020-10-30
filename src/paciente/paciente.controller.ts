import { Controller, Post, Put, Get, Delete, Param, Body} from '@nestjs/common';
import { PacienteService } from './paciente.service'
import { Paciente } from './paciente.entity';
import { bad_request, DeletedResult } from '../helpers'
  

@Controller('paciente')
export class PacienteController {
    constructor(
        private pacienteService: PacienteService,
      ){

      }

    @Post()
    async create(@Body() _Paciente: Paciente): Promise<Paciente>{
        try {

            return await this.pacienteService.create( _Paciente)

        } catch(e){
            console.log(e)
            throw bad_request(e)
        }
    }

    @Put()
    async update(@Body() _Paciente: Paciente): Promise<Paciente>{
        try {
            
            return await this.pacienteService.update(_Paciente)

        } catch(e) {
            console.log(e)
            throw bad_request(e)
        }
    }

    @Get(':id?')
    async read(@Param('id') id: string = null ): Promise<Paciente[]|Paciente> {
        try {
            return await this.pacienteService.read(id)
        } catch (e) {
            console.log(e)
            throw bad_request(e)
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<DeletedResult>{
        try {
            
            const deleted = await this.pacienteService.delete(id)
            const result: DeletedResult = { deleted } 
            
            return result

        } catch(e) {
            console.log(e)
            throw bad_request(e)
        }
    }
}
