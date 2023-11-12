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
        console.log("ok")
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
        }).catch((error) => {throw new BadRequestException(error)})
    }

    async delete(id: number){
        return await this.db.tarefa.delete({
            where: {
                id: id
            }
        })        
    }
}
