import {Tarefa} from '@prisma/client'
import {IsNumber, IsString, IsBoolean, IsOptional, IsNotEmpty} from 'class-validator'

export class TarefaEntity implements Tarefa{
    @IsNumber({},
        {message: "O atributo 'concluido' deve ser um Int!"})
    id: number
    
    @IsNotEmpty({
        message: "O atributo 'texto' é obrigatório!"
    })
    @IsString({
        message: "O atributo 'texto' deve ser uma string!"
    })
    texto: string
    
    @IsNotEmpty({
        message: "O atributo 'concluido' é obrigatório!"
    })
    @IsBoolean({
        message: "O atributo 'concluido' deve ser um boolean!"
    })
    concluido: boolean
    
    @IsOptional()
    @IsNumber({},
        {message: "O atributo 'categoria_id' deve ser um Int!"})
    categoria_id: number
}