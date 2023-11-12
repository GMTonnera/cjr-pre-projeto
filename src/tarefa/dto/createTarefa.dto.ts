import { PartialType, PickType } from "@nestjs/swagger"
import { TarefaEntity } from "../entity/tarefa.entity"

export class createTarefaDto extends PickType(TarefaEntity,
     ['texto', 'concluido', 'categoria_id']){}