"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const multer_azure_blob_storage_1 = require("multer-azure-blob-storage");
const azureStorage = new multer_azure_blob_storage_1.MulterAzureStorage({
    connectionString: 'DefaultEndpointsProtocol=https;AccountName=mediamupload;AccountKey=tif7F50lvpW8cTiFox8nReL65XJKTN1lWuul8j8DMV3533+EAYJCXyffBlohJ8INGtlzjzR0fcA5Lu9YbWVPug==;EndpointSuffix=core.windows.net',
    accessKey: '8rh356G+cKNtplbJbaBzzfy7S3Tr8W0iTn/QPAuR9xhiYijHh3reqP4jUjC6oGJcnoQAbZVUZ/hk3eIY14hQiA==',
    accountName: 'mediamupload',
    containerName: 'documents',
    containerAccessLevel: 'blob',
    urlExpirationTime: 60
});
const uploadsBlob = multer({ storage: azureStorage });
exports.default = uploadsBlob;
