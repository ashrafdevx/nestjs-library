import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constant';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): typeof v2 => {
    v2.config({
      cloud_name:
        process.env.CLOUDINARY_CLOUD_NAME ??
        process.env.CLD_CLOUD_NAME ??
        process.env.cloud_name,
      api_key: process.env.CLOUDINARY_API_KEY ?? process.env.CLD_API_KEY,
      api_secret:
        process.env.CLOUDINARY_API_SECRET ?? process.env.CLD_API_SECRET,
    });

    return v2;
  },
};
