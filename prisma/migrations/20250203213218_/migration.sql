/*
  Warnings:

  - Added the required column `image` to the `Actor` table without a default value. This is not possible if the table is not empty.

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
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL
);
INSERT INTO "new_Actor" ("career", "dateOfBirth", "height", "id", "name", "placeOfBirth", "price", "surname", "totalMovies") SELECT "career", "dateOfBirth", "height", "id", "name", "placeOfBirth", "price", "surname", "totalMovies" FROM "Actor";
DROP TABLE "Actor";
ALTER TABLE "new_Actor" RENAME TO "Actor";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
