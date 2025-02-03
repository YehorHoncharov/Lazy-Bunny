-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "movieId" INTEGER NOT NULL,
    CONSTRAINT "Comment_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Comment" ("author", "date", "id", "movieId", "text") SELECT "author", "date", "id", "movieId", "text" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
CREATE TABLE "new_MovieToActor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "actorId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,
    CONSTRAINT "MovieToActor_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "Actor" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "MovieToActor_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_MovieToActor" ("actorId", "id", "movieId") SELECT "actorId", "id", "movieId" FROM "MovieToActor";
DROP TABLE "MovieToActor";
ALTER TABLE "new_MovieToActor" RENAME TO "MovieToActor";
CREATE TABLE "new_Relation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "genreId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,
    CONSTRAINT "Relation_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Relation_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Relation" ("genreId", "id", "movieId") SELECT "genreId", "id", "movieId" FROM "Relation";
DROP TABLE "Relation";
ALTER TABLE "new_Relation" RENAME TO "Relation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
