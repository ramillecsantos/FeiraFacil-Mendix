ALTER TABLE "feirafacil$despensa" ADD "quantidadecompra" INT NULL;
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('507c2ae5-aec2-4fef-a1ab-28d11a899085', '2d9e4448-6d0a-4759-98eb-8635eee6c52e', 'QuantidadeCompra', 'quantidadecompra', 3, 0, '', false);
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20240303 18:38:39';
