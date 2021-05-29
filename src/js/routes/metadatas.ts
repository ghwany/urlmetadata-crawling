import * as urlMetadata from 'url-metadata';
import { Request, Response, NextFunction } from 'express';
import { URLMetadataSchema } from '../models/metadatas';
import * as restful from 'node-restful';

export const URLMetadataModel = restful.model('metadata', URLMetadataSchema).methods(['post']);
export const URLMetadatasModel = restful.model('metadata', URLMetadataSchema).methods(['get']);

URLMetadataModel.before(
    'post',
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        if ('url' in req.body) {
            console.log(`Request metadata URL: ${req.body.url}`);
            try {
                await urlMetadata(req.body.url).then((metadata) => {
                    req.body.url = metadata.url;
                    req.body.date = new Date();
                    req.body.description = metadata.description;
                    req.body.image = metadata.image;
                    req.body.title = metadata.title;
                    req.body.publisher = metadata['og:site_name'];
                });
            } catch (e) {
                console.log(`Request error: ${e}`);
                res.status(500).json({ ack: 1 });
            }
        } else {
            console.log(`Request metadata URL not included.: `);
            console.log(req.body);
            res.status(400);
        }
        next();
    },
);
