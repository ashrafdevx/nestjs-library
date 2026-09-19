import { v2 } from 'cloudinary';
export declare const CloudinaryProvider: {
    provide: string;
    useFactory: () => typeof v2;
};
