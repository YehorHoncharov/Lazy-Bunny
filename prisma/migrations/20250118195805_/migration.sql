/*
  Warnings:

  - You are about to drop the column `actorId` on the `Actor` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Actor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL
);
INSERT INTO "new_Actor" ("firstName", "id", "lastName") SELECT "firstName", "id", "lastName" FROM "Actor";
DROP TABLE "Actor";
ALTER TABLE "new_Actor" RENAME TO "Actor";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
