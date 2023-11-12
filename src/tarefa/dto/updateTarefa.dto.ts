import { PickType, PartialType } from "@nestjs/swagger";
import { TarefaEntity } from "../entity/tarefa.entity";

export class updateTarefaDto extends PartialType(PickType(
    TarefaEntity, [
        'texto',
        'concluido',
        'categoria_id'
    ]
)){}