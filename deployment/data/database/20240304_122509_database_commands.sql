ALTER TABLE "feirafacil$cadastro" ADD CONSTRAINT "uniq_feirafacil$cadastro_produto" UNIQUE ("produto");
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_feirafacil$cadastro_produto', '4bd9df3a-f1e9-4199-a1a8-442ca20a7af4', '7c95010c-a5ce-4f1b-a8e8-de4b3953ad3d');
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20240304 12:25:09';
