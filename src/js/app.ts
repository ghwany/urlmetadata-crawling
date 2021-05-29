import * as express from 'express';
import { createServer } from 'http';
import * as metadatas from './routes/metadatas';
import * as mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
metadatas.URLMetadatasModel.register(app, '/metadatas');
metadatas.URLMetadataModel.register(app, '/metadata');

const MONGO_URI: string = process.env.MONGO_URI || 'mongodb://mongo';
mongoose.Promise = global.Promise;
mongoose
    .connect(MONGO_URI, { useMongoClient: true })
    .then(() => console.log('Connected to mongodb'))
    .catch((e) => console.error(e));

const port: number = Number(process.env.PORT) || 3000;
const httpServer = createServer(app);

httpServer.listen(port, () => {
    console.log(`Listening on port=${port}`);
});
