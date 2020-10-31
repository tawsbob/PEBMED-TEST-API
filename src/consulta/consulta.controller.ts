import { Controller, Post, Put, Get, Delete, Param, Body} from '@nestjs/common';
import { ConsultaService } from './consulta.service'
import { Consulta } from './consulta.entity';
import { bad_request, DeletedResult } from '../helpers'
  

@Controller('consulta')
export class ConsultaController {
    constructor(
        private consultaService: ConsultaService,
      ){

      }

    @Post()
    async create(@Body() _Consulta: Consulta): Promise<Consulta>{
        try {
            return await this.consultaService.create(_Consulta)

        } catch(e){
            throw bad_request(e)
        }
    }

    @Put()
    async update(@Body() _Consulta: Consulta): Promise<Consulta>{
        try {
            
            return await this.consultaService.update(_Consulta)

        } catch(e) {
            throw bad_request(e)
        }
    }

    @Get(':id?')
    async read(@Param('id') id: string = null ): Promise<Consulta[]|Consulta> {
        try {
            return await this.consultaService.read(id)
        } catch (e) {
            throw bad_request(e)
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<DeletedResult>{
        try {
            
            const deleted = await this.consultaService.delete(id)
            const result: DeletedResult = { deleted } 
            
            return result

        } catch(e) {
            throw bad_request(e)
        }
    }
}
