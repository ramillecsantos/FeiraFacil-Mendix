CREATE TABLE "feirafacil$despensa_lista" (
	"feirafacil$despensaid" BIGINT NOT NULL,
	"feirafacil$listaid" BIGINT NOT NULL,
	PRIMARY KEY("feirafacil$despensaid","feirafacil$listaid"),
	CONSTRAINT "uniq_feirafacil$despensa_lista_feirafacil$listaid" UNIQUE ("feirafacil$listaid"),
	CONSTRAINT "uniq_feirafacil$despensa_lista_feirafacil$despensaid" UNIQUE ("feirafacil$despensaid"),
	CONSTRAINT "frn_feirafacil$despensa_lista_feirafacil$despensaid" FOREIGN KEY ( "feirafacil$despensaid" ) REFERENCES "feirafacil$despensa" ( "id" ) ON DELETE CASCADE,
	CONSTRAINT "frn_feirafacil$despensa_lista_feirafacil$listaid" FOREIGN KEY ( "feirafacil$listaid" ) REFERENCES "feirafacil$lista" ( "id" ) ON DELETE CASCADE);
CREATE INDEX "idx_feirafacil$despensa_lista_feirafacil$lista_feirafacil$despensa" ON "feirafacil$despensa_lista" ("feirafacil$listaid" ASC,"feirafacil$despensaid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name", "parent_fkc_name", "child_fkc_name", "parent_fkc_action", "child_fkc_action") VALUES ('af8dc9f0-0eeb-4c66-b597-e665ad2b2050', 'FeiraFacil.Despensa_Lista', 'feirafacil$despensa_lista', '2d9e4448-6d0a-4759-98eb-8635eee6c52e', 'ac3ce35f-ba1f-4986-b352-f5a039c1b381', 'feirafacil$despensaid', 'feirafacil$listaid', 'idx_feirafacil$despensa_lista_feirafacil$lista_feirafacil$despensa', 'frn_feirafacil$despensa_lista_feirafacil$despensaid', 'frn_feirafacil$despensa_lista_feirafacil$listaid', 0, 0);
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_feirafacil$despensa_lista_feirafacil$listaid', 'af8dc9f0-0eeb-4c66-b597-e665ad2b2050', '2611a9b7-bca6-3c3d-8314-aaa710d73efe');
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_feirafacil$despensa_lista_feirafacil$despensaid', 'af8dc9f0-0eeb-4c66-b597-e665ad2b2050', 'c73346e7-79e8-30d3-b929-f39bf7467c8d');
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20240303 22:27:03';
