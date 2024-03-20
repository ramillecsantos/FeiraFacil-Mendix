ALTER TABLE "feirafacil$despensa_lista" DROP CONSTRAINT "frn_feirafacil$despensa_lista_feirafacil$despensaid";
ALTER TABLE "feirafacil$despensa_lista" DROP CONSTRAINT "frn_feirafacil$despensa_lista_feirafacil$listaid";
ALTER TABLE "feirafacil$despensa_lista" DROP CONSTRAINT "uniq_feirafacil$despensa_lista_feirafacil$listaid";
ALTER TABLE "feirafacil$despensa_lista" DROP CONSTRAINT "uniq_feirafacil$despensa_lista_feirafacil$despensaid";
DROP INDEX "idx_feirafacil$despensa_lista_feirafacil$lista_feirafacil$despensa";
ALTER TABLE "feirafacil$despensa_lista" RENAME TO "e8dd01072e5b43a9933fab31f8129391";
DELETE FROM "mendixsystem$association"  WHERE "id" = 'af8dc9f0-0eeb-4c66-b597-e665ad2b2050';
DELETE FROM "mendixsystem$unique_constraint"  WHERE "name" = 'uniq_feirafacil$despensa_lista_feirafacil$listaid' AND "column_id" = '2611a9b7-bca6-3c3d-8314-aaa710d73efe';
DELETE FROM "mendixsystem$unique_constraint"  WHERE "name" = 'uniq_feirafacil$despensa_lista_feirafacil$despensaid' AND "column_id" = 'c73346e7-79e8-30d3-b929-f39bf7467c8d';
CREATE TABLE "feirafacil$podutoslista" (
	"id" BIGINT NOT NULL,
	"produto" VARCHAR_IGNORECASE(200) NULL,
	"setorizacao" VARCHAR_IGNORECASE(15) NULL,
	"medida" VARCHAR_IGNORECASE(7) NULL,
	"quantidade" INT NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('5361cb03-9034-4151-a6e5-58079339df3b', 'FeiraFacil.PodutosLista', 'feirafacil$podutoslista', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('abc12c7d-7ad4-4e12-acbe-8fc9501b2ad1', '5361cb03-9034-4151-a6e5-58079339df3b', 'Produto', 'produto', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('1f583731-4e0e-45ec-96b8-80fa7b290436', '5361cb03-9034-4151-a6e5-58079339df3b', 'Setorizacao', 'setorizacao', 40, 15, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('6aafc089-9d87-4e1d-98eb-3d9bdd9d4130', '5361cb03-9034-4151-a6e5-58079339df3b', 'Medida', 'medida', 40, 7, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('853dd268-0aca-41e9-a89d-ec8caaf5cd8d', '5361cb03-9034-4151-a6e5-58079339df3b', 'Quantidade', 'quantidade', 3, 0, '', false);
CREATE TABLE "feirafacil$podutoslista_lista" (
	"feirafacil$podutoslistaid" BIGINT NOT NULL,
	"feirafacil$listaid" BIGINT NOT NULL,
	PRIMARY KEY("feirafacil$podutoslistaid","feirafacil$listaid"),
	CONSTRAINT "uniq_feirafacil$podutoslista_lista_feirafacil$podutoslistaid" UNIQUE ("feirafacil$podutoslistaid"),
	CONSTRAINT "frn_feirafacil$podutoslista_lista_feirafacil$podutoslistaid" FOREIGN KEY ( "feirafacil$podutoslistaid" ) REFERENCES "feirafacil$podutoslista" ( "id" ) ON DELETE CASCADE,
	CONSTRAINT "frn_feirafacil$podutoslista_lista_feirafacil$listaid" FOREIGN KEY ( "feirafacil$listaid" ) REFERENCES "feirafacil$lista" ( "id" ) ON DELETE CASCADE);
CREATE INDEX "idx_feirafacil$podutoslista_lista_feirafacil$lista_feirafacil$podutoslista" ON "feirafacil$podutoslista_lista" ("feirafacil$listaid" ASC,"feirafacil$podutoslistaid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name", "parent_fkc_name", "child_fkc_name", "parent_fkc_action", "child_fkc_action") VALUES ('1b35038f-8130-4bf2-81dd-4c5d1b1a1f9a', 'FeiraFacil.PodutosLista_Lista', 'feirafacil$podutoslista_lista', '5361cb03-9034-4151-a6e5-58079339df3b', 'ac3ce35f-ba1f-4986-b352-f5a039c1b381', 'feirafacil$podutoslistaid', 'feirafacil$listaid', 'idx_feirafacil$podutoslista_lista_feirafacil$lista_feirafacil$podutoslista', 'frn_feirafacil$podutoslista_lista_feirafacil$podutoslistaid', 'frn_feirafacil$podutoslista_lista_feirafacil$listaid', 0, 0);
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_feirafacil$podutoslista_lista_feirafacil$podutoslistaid', '1b35038f-8130-4bf2-81dd-4c5d1b1a1f9a', 'f40b639a-6db6-3e92-b01b-5bcec82ce04e');
DROP TABLE "e8dd01072e5b43a9933fab31f8129391";
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20240303 23:44:25';
