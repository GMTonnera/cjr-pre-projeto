import { Module } from '@nestjs/common';
import { TarefaModule } from './tarefa/tarefa.module';
import { CategoriaModule } from './categoria/categoria.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [TarefaModule, CategoriaModule, DbModule]
})
export class AppModule {}
