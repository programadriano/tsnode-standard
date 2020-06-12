"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const multer_azure_blob_storage_1 = require("multer-azure-blob-storage");
const azureStorage = new multer_azure_blob_storage_1.MulterAzureStorage({
    connectionString: 'DefaultEndpointsProtocol=https;AccountName=typescriptupload;AccountKey=8+Zr3BdQX9vd+2B3dvcw4AcwvPghj0YJCHlt/YH2vEUD73nHpqWua6+X/qMqbdz6TBL9DYa+s7EszKTKdg0dMw==;EndpointSuffix=core.windows.net',
    accessKey: '8+Zr3BdQX9vd+2B3dvcw4AcwvPghj0YJCHlt/YH2vEUD73nHpqWua6+X/qMqbdz6TBL9DYa+s7EszKTKdg0dMw==',
    accountName: 'typescriptupload',
    containerName: 'tsupload',
    containerAccessLevel: 'blob',
    urlExpirationTime: 60
});
const uploadAzure = multer({ storage: azureStorage });
exports.default = uploadAzure;
