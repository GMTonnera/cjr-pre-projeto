import { PartialType, PickType } from '@nestjs/swagger'
import { CategoriaEntity } from '../entity/categoria.entity'

export class updateCategoriaDto extends PartialType(
    PickType(CategoriaEntity, ['id','texto'])
) {}

