import express, { json } from 'express';
import cors from 'cors';
import { graphqlUploadExpress } from 'graphql-upload';

export const app = express();

app.use(cors());
app.use(json());
app.use(graphqlUploadExpress());
