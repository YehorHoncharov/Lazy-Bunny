/*
  Warnings:

  - You are about to drop the column `languege` on the `Movie` table. All the data in the column will be lost.
  - Added the required column `language` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "language" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "ageRating" INTEGER NOT NULL
);
INSERT INTO "new_Movie" ("ageRating", "country", "id", "name", "rating", "year") SELECT "ageRating", "country", "id", "name", "rating", "year" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
