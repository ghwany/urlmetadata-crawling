import { Schema } from 'mongoose';

export interface IURLMetadata {
    date: Date;
    description: string;
    title: string;
    image: string;
    publisher: string;
    url: string;
}

export const URLMetadataSchema: Schema = new Schema({
    url: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    title: {
        type: String,
    },
    description: String,
    image: String,
    publisher: String,
    date: Date,
});
