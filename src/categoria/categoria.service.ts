import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CategoriaDTO } from './categoria.dto';

@Injectable()
export class CategoriaService {
    constructor(private db: DbService){}

    async create(dto: CategoriaDTO){
        return await this.db.categoria.create({
            data:{
                texto: dto.texto,
            },
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

    async update(id: number, dto: CategoriaDTO){
        return await this.db.categoria.update({
            where: {
                id: id
            },
            data: {
                texto: dto.texto
            }
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
