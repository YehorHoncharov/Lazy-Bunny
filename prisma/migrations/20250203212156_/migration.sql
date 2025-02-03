/*
  Warnings:

  - You are about to drop the column `firstName` on the `Actor` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Actor` table. All the data in the column will be lost.
  - Added the required column `career` to the `Actor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `Actor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `Actor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Actor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `placeOfBirth` to the `Actor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Actor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surname` to the `Actor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalMovies` to the `Actor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Actor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "dateOfBirth" INTEGER NOT NULL,
    "placeOfBirth" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "career" TEXT NOT NULL,
    "totalMovies" INTEGER NOT NULL,
    "price" INTEGER NOT NULL
);
INSERT INTO "new_Actor" ("id") SELECT "id" FROM "Actor";
DROP TABLE "Actor";
ALTER TABLE "new_Actor" RENAME TO "Actor";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
