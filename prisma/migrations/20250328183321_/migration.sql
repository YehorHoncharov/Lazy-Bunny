/*
  Warnings:

  - Added the required column `Moments` to the `Movie` table without a default value. This is not possible if the table is not empty.

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
    "Img" TEXT NOT NULL,
    "Rating" INTEGER NOT NULL,
    "Moments" TEXT NOT NULL
);
INSERT INTO "new_Movie" ("Country", "Description", "Director", "Duration", "FilmCompany", "Img", "Language", "Name", "Rating", "ReleaseDate", "Screenwriter", "Year", "id") SELECT "Country", "Description", "Director", "Duration", "FilmCompany", "Img", "Language", "Name", "Rating", "ReleaseDate", "Screenwriter", "Year", "id" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
