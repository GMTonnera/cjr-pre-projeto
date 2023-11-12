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

    @Get('concluido/:c')
    async getAllTarefaConcluida(@Param('c') c: string){
        return await this.tarefaService.getAllConcluidos("true" === c.toLocaleLowerCase());
    }

    @Get('categoria/:cat_id')
    async getAllTarefaCategoria(@Param('cat_id') cat_id: string){
        return await this.tarefaService.getAllCategoria(+cat_id);
    }

    @Patch(':id')
    async updateTarefa(@Param('id') id: string, @Body() dto: updateTarefaDto){
        return await this.tarefaService.update(parseInt(id), dto);
    }

    @Delete('id/:id')
    deleteTarefa(@Param('id') id: string){
        return this.tarefaService.delete(parseInt(id));
    }

    @Delete('/concluido')
    deleteAllTarefaConcluido(){
        return this.tarefaService.deleteConcluido();
    }
}
