import {Categoria} from '@prisma/client'
import { IsNumber, IsString } from 'class-validator'

export class CategoriaEntity implements Categoria{
    @IsNumber()
    id: number

    @IsString()
    texto: string
}