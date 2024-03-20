ALTER TABLE "feirafacil$despensa" ALTER COLUMN "quantidadecompra" SET DATA TYPE DECIMAL(28, 8);
ALTER TABLE "feirafacil$despensa" ALTER COLUMN "quantidade" SET DATA TYPE DECIMAL(28, 8);
UPDATE "mendixsystem$attribute" SET "entity_id" = '2d9e4448-6d0a-4759-98eb-8635eee6c52e', "attribute_name" = 'Quantidade', "column_name" = 'quantidade', "type" = 5, "length" = 0, "default_value" = '', "is_auto_number" = false WHERE "id" = '85cf32b0-2771-43ef-b140-fa6751ba8b35';
UPDATE "mendixsystem$attribute" SET "entity_id" = '2d9e4448-6d0a-4759-98eb-8635eee6c52e', "attribute_name" = 'QuantidadeCompra', "column_name" = 'quantidadecompra', "type" = 5, "length" = 0, "default_value" = '0', "is_auto_number" = false WHERE "id" = '507c2ae5-aec2-4fef-a1ab-28d11a899085';
ALTER TABLE "feirafacil$cadastro" ALTER COLUMN "quantidade" SET DATA TYPE DECIMAL(28, 8);
UPDATE "mendixsystem$attribute" SET "entity_id" = '4bd9df3a-f1e9-4199-a1a8-442ca20a7af4', "attribute_name" = 'Quantidade', "column_name" = 'quantidade', "type" = 5, "length" = 0, "default_value" = '', "is_auto_number" = false WHERE "id" = 'ca574f53-04ba-45d4-a7a5-b234c5ba232c';
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20240303 19:00:53';
