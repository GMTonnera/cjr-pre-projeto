import { Controller, Delete, Patch, Post, Get, Body, Param } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { updateCategoriaDto } from './dto/updateCategoria.dto';
import { createCategoriaDto } from './dto/createCategoria.dto';


@Controller('categoria')        
export class CategoriaController {
    constructor(private catService: CategoriaService){}

    @Post()
    async createCategoria(@Body() dto: createCategoriaDto){
        return await this.catService.create(dto);
        
    }

    @Get()
    async getAllCategoria(){
        return await this.catService.getAll();
    }

    @Get(':id')
    async getCategoria(@Param('id') id: string){
        return await this.catService.getById(+id);
    }

    @Patch(':id')
    async updateCategoria(@Param('id') id: string, @Body() dto: updateCategoriaDto){
        return await this.catService.update(+id, dto);        
    }

    @Delete(':id')
    async deleteCategoria(@Param('id') id: string){
        return await this.catService.delete(+id);
    }
}
