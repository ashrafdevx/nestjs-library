"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryProvider = void 0;
const cloudinary_1 = require("cloudinary");
const constant_1 = require("./constant");
exports.CloudinaryProvider = {
    provide: constant_1.CLOUDINARY,
    useFactory: () => {
        cloudinary_1.v2.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME ??
                process.env.CLD_CLOUD_NAME ??
                process.env.cloud_name,
            api_key: process.env.CLOUDINARY_API_KEY ?? process.env.CLD_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET ?? process.env.CLD_API_SECRET,
        });
        return cloudinary_1.v2;
    },
};
//# sourceMappingURL=cloudinary.provider.js.map