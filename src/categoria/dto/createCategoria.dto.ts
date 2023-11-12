import { PickType } from '@nestjs/swagger'
import { CategoriaEntity } from '../entity/categoria.entity'

export class createCategoriaDto extends PickType(CategoriaEntity, ['texto'])
{}