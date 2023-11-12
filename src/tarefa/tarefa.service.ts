import { BadRequestException, Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { createTarefaDto } from './dto/createTarefa.dto';
import { updateTarefaDto } from './dto/updateTarefa.dto';

@Injectable()
export class TarefaService {
    constructor(private db: DbService){}

    async create(dto: createTarefaDto){
        return await this.db.tarefa.create({
            data: dto
        })    
    }

    async getAll(){
        return await this.db.tarefa.findMany();
    }

    async getById(id: number){
        return await this.db.tarefa.findUnique({
            where: {
                id: id
            }
        })
    }

    async update(id: number, dto: updateTarefaDto){
        return await this.db.tarefa.update({
            where: {
                id: id
            },
            data: dto
        })
    }

    async delete(id: number){
        return await this.db.tarefa.delete({
            where: {
                id: id
            }
        })        
    }

    async deleteConcluido(){
        return await this.db.tarefa.deleteMany({
            where: {
                concluido: true
            }
        })
    }

    async getAllConcluidos(c: boolean){
        return await this.db.tarefa.findMany({
            where: {
                concluido: c
            }
        })
    }

    async getAllCategoria(cat_id: number){
        return await this.db.tarefa.findMany({
            where: {
               categoria_id: cat_id 
            }
        })
    }
}
