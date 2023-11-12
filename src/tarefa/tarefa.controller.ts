import { Controller, Delete, Patch, Post, Get, Body, Param } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { createTarefaDto } from './dto/createTarefa.dto';
import { updateTarefaDto } from './dto/updateTarefa.dto';
@Controller('tarefa')
export class TarefaController {
    constructor(private tarefaService: TarefaService){}

    @Post()
    async createTarefa(@Body() dto: createTarefaDto){
        return await this.tarefaService.create(dto);    
    }

    @Get()
    async getAllTarefa(){
        return await this.tarefaService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string){
        return await this.tarefaService.getById(parseInt(id));
    }

    @Patch(':id')
    async updateTarefa(@Param('id') id: string, @Body() dto: updateTarefaDto){
        return await this.tarefaService.update(parseInt(id), dto);
    }

    @Delete(':id')
    deleteTarefa(@Param('id') id: string){
        return this.tarefaService.delete(parseInt(id));
    }
}
