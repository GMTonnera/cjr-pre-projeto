import { Controller, Delete, Patch, Post, Get, Body, Param } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { tarefaCreateDTO } from './taretaCreate.dto';

@Controller('tarefa')
export class TarefaController {
    constructor(private tarefaService: TarefaService){}

    @Post()
    createTarefa(@Body() dto: tarefaCreateDTO){
        return this.tarefaService.create(dto);
    }

    @Get()
    getAllTarefa(){
        return this.tarefaService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: string){
        return this.tarefaService.getById(parseInt(id));
    }

    @Patch(':id')
    updateTarefa(@Param('id') id: string, @Body() dto: tarefaUpdateDTO){
        return this.tarefaService.update(parseInt(id), dto);
    }

    @Delete(':id')
    deleteTarefa(@Param('id') id: string){
        return this.tarefaService.delete(parseInt(id));
    }
}
