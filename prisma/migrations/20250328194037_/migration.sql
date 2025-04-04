/*
  Warnings:

  - You are about to drop the column `name` on the `Moment` table. All the data in the column will be lost.
  - Added the required column `url` to the `Moment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Moment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "movieId" INTEGER NOT NULL,
    CONSTRAINT "Moment_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Moment" ("id", "movieId") SELECT "id", "movieId" FROM "Moment";
DROP TABLE "Moment";
ALTER TABLE "new_Moment" RENAME TO "Moment";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
