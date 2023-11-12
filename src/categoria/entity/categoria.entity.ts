import {Categoria} from '@prisma/client'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CategoriaEntity implements Categoria{
    @IsNumber({},{
        message: "O atributo 'texto' deve ser um Int!"
    })
    id: number

    @IsNotEmpty({
        message: "Atributo 'texto' é obrigatório!"
    })
    @IsString({
        message: "O atributo 'texto' deve ser uma string!"
    })
    texto: string
}