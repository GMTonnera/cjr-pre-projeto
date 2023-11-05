import { Controller, Delete, Patch, Post, Get, Body, Param } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaDTO } from './categoria.dto';

@Controller('categoria')
export class CategoriaController {
    constructor(private catService: CategoriaService){}

    @Post()
    createCategoria(@Body() dto: CategoriaDTO){
        return this.catService.create(dto);
    }

    @Get()
    getAllCategoria(){
        return this.catService.getAll();
    }

    @Get(':id')
    getCategoria(@Param('id') id: string){
        return this.catService.getById(parseInt(id));
    }

    @Patch(':id')
    updateCategoria(@Param('id') id: string, @Body() dto: CategoriaDTO){
        return this.catService.update(parseInt(id), dto);
    }

    @Delete(':id')
    deleteCategoria(@Param('id') id: string){
        return this.catService.delete(parseInt(id));
    }
}
