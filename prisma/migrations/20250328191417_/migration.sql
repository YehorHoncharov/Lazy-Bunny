/*
  Warnings:

  - You are about to drop the column `Moments` on the `Movie` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Moment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "movieId" INTEGER NOT NULL,
    CONSTRAINT "Moment_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

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
    "Rating" INTEGER NOT NULL
);
INSERT INTO "new_Movie" ("Country", "Description", "Director", "Duration", "FilmCompany", "Img", "Language", "Name", "Rating", "ReleaseDate", "Screenwriter", "Year", "id") SELECT "Country", "Description", "Director", "Duration", "FilmCompany", "Img", "Language", "Name", "Rating", "ReleaseDate", "Screenwriter", "Year", "id" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
