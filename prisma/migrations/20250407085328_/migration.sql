/*
  Warnings:

  - A unique constraint covering the columns `[movieId,genreId]` on the table `Relation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Relation_movieId_genreId_key" ON "Relation"("movieId", "genreId");
