import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { tarefaCreateDTO } from './taretaCreate.dto';

@Injectable()
export class TarefaService {
    constructor(private db: DbService){}

    create(dto: tarefaCreateDTO){
        return this.db.tarefa.create({
            data: {
                texto: dto.texto,
                concluido: dto.concluido,
                categoria_id: dto.categoria_id
            }
        })
    }

    getAll(){

    }

    getById(id: number){

    }

    update(id: number, dto: tarefaUpdateDTO){

    }

    delete(id: number){
        
    }
}
