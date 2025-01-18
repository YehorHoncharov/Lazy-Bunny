/*
  Warnings:

  - You are about to drop the column `ageRating` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `language` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Movie` table. All the data in the column will be lost.
  - Added the required column `Country` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Description` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Director` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Duration` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FilmCompany` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Img` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Language` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `MoodImg` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Name` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Rating` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ReleaseDate` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Screenwriter` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Year` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "ReleaseDate" TEXT NOT NULL,
    "Year" INTEGER NOT NULL,
    "Country" TEXT NOT NULL,
    "Director" TEXT NOT NULL,
    "Duration" TEXT NOT NULL,
    "Screenwriter" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Language" TEXT NOT NULL,
    "FilmCompany" TEXT NOT NULL,
    "MoodImg" TEXT NOT NULL,
    "Img" TEXT NOT NULL,
    "Rating" INTEGER NOT NULL
);
INSERT INTO "new_Movie" ("id") SELECT "id" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
