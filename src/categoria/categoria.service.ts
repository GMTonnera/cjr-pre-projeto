import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { updateCategoriaDto } from './dto/updateCategoria.dto';
import { createCategoriaDto } from './dto/createCategoria.dto';

@Injectable()
export class CategoriaService {
    constructor(private db: DbService){}

    async create(dto: createCategoriaDto){
        return await this.db.categoria.create({
            data: dto,
        }); 
    }

    async getById(id: number){
        return await this.db.categoria.findUnique({
            where:{
                id: id
            }
        });
    }

    async getAll(){
        return await this.db.categoria.findMany();
    }

    async update(id: number, dto: updateCategoriaDto){
        return await this.db.categoria.update({
            data: dto,
            where: {
                id: id
            },
        });
    }

    async delete(id: number){
        return await this.db.categoria.delete({
            where: {
                id: id
            }
        });
    }


}
