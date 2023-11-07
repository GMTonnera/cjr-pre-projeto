-- DropForeignKey
ALTER TABLE "Tarefa" DROP CONSTRAINT "Tarefa_categoria_id_fkey";

-- AlterTable
ALTER TABLE "Tarefa" ALTER COLUMN "categoria_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Tarefa" ADD CONSTRAINT "Tarefa_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "Categoria"("id") ON DELETE SET NULL ON UPDATE CASCADE;
