CREATE TABLE "documentgeneration$documentrequest" (
	"id" BIGINT NOT NULL,
	"requestid" VARCHAR_IGNORECASE(200) NULL,
	"filename" VARCHAR_IGNORECASE(200) NULL,
	"resultentity" VARCHAR_IGNORECASE(200) NULL,
	"microflowname" VARCHAR_IGNORECASE(200) NULL,
	"contextobjectguid" BIGINT NULL,
	"securitytoken" VARCHAR_IGNORECASE(200) NULL,
	"expirationdate" TIMESTAMP NULL,
	"createddate" TIMESTAMP NULL,
	PRIMARY KEY("id"),
	CONSTRAINT "uniq_documentgeneration$documentrequest_requestid" UNIQUE ("requestid"));
CREATE INDEX "idx_documentgeneration$documentrequest_requestid_asc" ON "documentgeneration$documentrequest" ("requestid" ASC,"id" ASC);
CREATE INDEX "idx_documentgeneration$documentrequest_expirationdate_asc" ON "documentgeneration$documentrequest" ("expirationdate" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('379ebe33-77ad-4615-9f3f-3145855e8636', 'DocumentGeneration.DocumentRequest', 'documentgeneration$documentrequest', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('fd188b1f-42ee-40ac-b1de-b4330ae66266', '379ebe33-77ad-4615-9f3f-3145855e8636', 'RequestId', 'requestid', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('1fe94d8c-7028-4ad4-bd15-870ea3e41bdd', '379ebe33-77ad-4615-9f3f-3145855e8636', 'FileName', 'filename', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('896a25ba-e99d-4006-9616-8b9c45d64f7c', '379ebe33-77ad-4615-9f3f-3145855e8636', 'ResultEntity', 'resultentity', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('050c8176-1a4e-49c6-97bc-60ce62e9f60b', '379ebe33-77ad-4615-9f3f-3145855e8636', 'MicroflowName', 'microflowname', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('a0b53d24-1377-43d3-ad66-da0d49a123a4', '379ebe33-77ad-4615-9f3f-3145855e8636', 'ContextObjectGuid', 'contextobjectguid', 4, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('67ff8565-36f4-4c04-94df-fed24e957aa4', '379ebe33-77ad-4615-9f3f-3145855e8636', 'SecurityToken', 'securitytoken', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('58270561-f482-4270-a447-e973cb5d6d33', '379ebe33-77ad-4615-9f3f-3145855e8636', 'ExpirationDate', 'expirationdate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('3aa46668-49a5-3701-ae59-4e4bfee9e60b', '379ebe33-77ad-4615-9f3f-3145855e8636', 'createdDate', 'createddate', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('2cd6a9ae-2883-498b-b880-31bb7b5a5849', '379ebe33-77ad-4615-9f3f-3145855e8636', 'idx_documentgeneration$documentrequest_requestid_asc');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('2cd6a9ae-2883-498b-b880-31bb7b5a5849', 'fd188b1f-42ee-40ac-b1de-b4330ae66266', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('5c66e44f-e0f0-479c-80e4-dbf166e43ed4', '379ebe33-77ad-4615-9f3f-3145855e8636', 'idx_documentgeneration$documentrequest_expirationdate_asc');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('5c66e44f-e0f0-479c-80e4-dbf166e43ed4', '58270561-f482-4270-a447-e973cb5d6d33', false, 0);
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_documentgeneration$documentrequest_requestid', '379ebe33-77ad-4615-9f3f-3145855e8636', 'fd188b1f-42ee-40ac-b1de-b4330ae66266');
CREATE TABLE "documentgeneration$configuration" (
	"id" BIGINT NOT NULL,
	"deploymenttype" VARCHAR_IGNORECASE(18) NULL,
	"registrationstatus" VARCHAR_IGNORECASE(12) NULL,
	"applicationurl" VARCHAR_IGNORECASE(200) NULL,
	"accesstoken" VARCHAR_IGNORECASE(2147483647) NULL,
	"accesstokenexpirationdate" TIMESTAMP NULL,
	"refreshtoken" VARCHAR_IGNORECASE(2147483647) NULL,
	"verificationtoken" VARCHAR_IGNORECASE(200) NULL,
	"verificationtokenexpirationdate" TIMESTAMP NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('e62c0a2c-1c80-4360-80f4-91555e626887', 'DocumentGeneration.Configuration', 'documentgeneration$configuration', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('5c572cd9-f117-4929-ba97-d29a57a2949f', 'e62c0a2c-1c80-4360-80f4-91555e626887', 'DeploymentType', 'deploymenttype', 40, 18, 'MendixPublicCloud', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('cc696c1d-c9fc-4372-bec6-6f1dee6f8ff8', 'e62c0a2c-1c80-4360-80f4-91555e626887', 'RegistrationStatus', 'registrationstatus', 40, 12, 'Unregistered', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('230c657a-a233-4b5a-8b18-c4330b96405a', 'e62c0a2c-1c80-4360-80f4-91555e626887', 'ApplicationUrl', 'applicationurl', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('850d72a8-01b2-4bfe-afcb-a4ad8572f317', 'e62c0a2c-1c80-4360-80f4-91555e626887', 'AccessToken', 'accesstoken', 30, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('605c10bc-c18b-4886-b904-0a056b8d4ce1', 'e62c0a2c-1c80-4360-80f4-91555e626887', 'AccessTokenExpirationDate', 'accesstokenexpirationdate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('c05fcbfe-8084-43bf-9f5b-aed46cd78450', 'e62c0a2c-1c80-4360-80f4-91555e626887', 'RefreshToken', 'refreshtoken', 30, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('8b1219cc-fd93-4e24-a85e-9d05b71a5d64', 'e62c0a2c-1c80-4360-80f4-91555e626887', 'VerificationToken', 'verificationtoken', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('81474d3f-35a0-49de-b56f-3c9db47ccd22', 'e62c0a2c-1c80-4360-80f4-91555e626887', 'VerificationTokenExpirationDate', 'verificationtokenexpirationdate', 20, 0, '', false);
CREATE TABLE "documentgeneration$documentrequest_session" (
	"documentgeneration$documentrequestid" BIGINT NOT NULL,
	"system$sessionid" BIGINT NOT NULL,
	PRIMARY KEY("documentgeneration$documentrequestid","system$sessionid"),
	CONSTRAINT "uniq_documentgeneration$documentrequest_session_documentgeneration$documentrequestid" UNIQUE ("documentgeneration$documentrequestid"),
	CONSTRAINT "frn_documentgeneration$documentrequest_session_documentgeneration$documentrequestid" FOREIGN KEY ( "documentgeneration$documentrequestid" ) REFERENCES "documentgeneration$documentrequest" ( "id" ) ON DELETE CASCADE,
	CONSTRAINT "frn_documentgeneration$documentrequest_session_system$sessionid" FOREIGN KEY ( "system$sessionid" ) REFERENCES "system$session" ( "id" ) ON DELETE CASCADE);
CREATE INDEX "idx_documentgeneration$documentrequest_session_system$session_documentgeneration$documentrequest" ON "documentgeneration$documentrequest_session" ("system$sessionid" ASC,"documentgeneration$documentrequestid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name", "parent_fkc_name", "child_fkc_name", "parent_fkc_action", "child_fkc_action") VALUES ('edab718c-2bfa-4d1b-a546-e96d0ac344f2', 'DocumentGeneration.DocumentRequest_Session', 'documentgeneration$documentrequest_session', '379ebe33-77ad-4615-9f3f-3145855e8636', '37f9fd49-5318-4c63-9a51-f761779b202f', 'documentgeneration$documentrequestid', 'system$sessionid', 'idx_documentgeneration$documentrequest_session_system$session_documentgeneration$documentrequest', 'frn_documentgeneration$documentrequest_session_documentgeneration$documentrequestid', 'frn_documentgeneration$documentrequest_session_system$sessionid', 0, 0);
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_documentgeneration$documentrequest_session_documentgeneration$documentrequestid', 'edab718c-2bfa-4d1b-a546-e96d0ac344f2', 'dc77b8de-9fc3-383b-85e3-bb37a03cdd54');
CREATE TABLE "documentgeneration$documentrequest_documentuser" (
	"documentgeneration$documentrequestid" BIGINT NOT NULL,
	"system$userid" BIGINT NOT NULL,
	PRIMARY KEY("documentgeneration$documentrequestid","system$userid"),
	CONSTRAINT "uniq_documentgeneration$documentrequest_documentuser_documentgeneration$documentrequestid" UNIQUE ("documentgeneration$documentrequestid"),
	CONSTRAINT "frn_documentgeneration$documentrequest_documentuser_documentgeneration$documentrequestid" FOREIGN KEY ( "documentgeneration$documentrequestid" ) REFERENCES "documentgeneration$documentrequest" ( "id" ) ON DELETE CASCADE,
	CONSTRAINT "frn_documentgeneration$documentrequest_documentuser_system$userid" FOREIGN KEY ( "system$userid" ) REFERENCES "system$user" ( "id" ) ON DELETE CASCADE);
CREATE INDEX "idx_documentgeneration$documentrequest_documentuser_system$user_documentgeneration$documentrequest" ON "documentgeneration$documentrequest_documentuser" ("system$userid" ASC,"documentgeneration$documentrequestid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name", "parent_fkc_name", "child_fkc_name", "parent_fkc_action", "child_fkc_action") VALUES ('f0a00bd3-b372-42c8-95bc-ca8cd8bb98f3', 'DocumentGeneration.DocumentRequest_DocumentUser', 'documentgeneration$documentrequest_documentuser', '379ebe33-77ad-4615-9f3f-3145855e8636', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'documentgeneration$documentrequestid', 'system$userid', 'idx_documentgeneration$documentrequest_documentuser_system$user_documentgeneration$documentrequest', 'frn_documentgeneration$documentrequest_documentuser_documentgeneration$documentrequestid', 'frn_documentgeneration$documentrequest_documentuser_system$userid', 0, 0);
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_documentgeneration$documentrequest_documentuser_documentgeneration$documentrequestid', 'f0a00bd3-b372-42c8-95bc-ca8cd8bb98f3', '60516227-4928-375a-aea7-a1cb54907b19');
CREATE TABLE "documentgeneration$documentrequest_filedocument" (
	"documentgeneration$documentrequestid" BIGINT NOT NULL,
	"system$filedocumentid" BIGINT NOT NULL,
	PRIMARY KEY("documentgeneration$documentrequestid","system$filedocumentid"),
	CONSTRAINT "uniq_documentgeneration$documentrequest_filedocument_documentgeneration$documentrequestid" UNIQUE ("documentgeneration$documentrequestid"),
	CONSTRAINT "frn_documentgeneration$documentrequest_filedocument_documentgeneration$documentrequestid" FOREIGN KEY ( "documentgeneration$documentrequestid" ) REFERENCES "documentgeneration$documentrequest" ( "id" ) ON DELETE CASCADE,
	CONSTRAINT "frn_documentgeneration$documentrequest_filedocument_system$filedocumentid" FOREIGN KEY ( "system$filedocumentid" ) REFERENCES "system$filedocument" ( "id" ) ON DELETE CASCADE);
CREATE INDEX "idx_documentgeneration$documentrequest_filedocument_system$filedocument_documentgeneration$documentrequest" ON "documentgeneration$documentrequest_filedocument" ("system$filedocumentid" ASC,"documentgeneration$documentrequestid" ASC);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "index_name", "parent_fkc_name", "child_fkc_name", "parent_fkc_action", "child_fkc_action") VALUES ('be7071cb-fcc8-440f-85d3-8a4fbb95dfbd', 'DocumentGeneration.DocumentRequest_FileDocument', 'documentgeneration$documentrequest_filedocument', '379ebe33-77ad-4615-9f3f-3145855e8636', '170ce49d-f29c-4fac-99a6-b55e8a3aeb39', 'documentgeneration$documentrequestid', 'system$filedocumentid', 'idx_documentgeneration$documentrequest_filedocument_system$filedocument_documentgeneration$documentrequest', 'frn_documentgeneration$documentrequest_filedocument_documentgeneration$documentrequestid', 'frn_documentgeneration$documentrequest_filedocument_system$filedocumentid', 0, 0);
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_documentgeneration$documentrequest_filedocument_documentgeneration$documentrequestid', 'be7071cb-fcc8-440f-85d3-8a4fbb95dfbd', 'a418e4c8-5dd6-3c5f-b2da-d74376be159d');
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20240303 16:09:55';
