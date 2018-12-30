import bodyParser from 'body-parser';
import express from 'express';
import methodOverride from 'method-override';

import './controllers/users';
import { RegisterRoutes } from './routes/routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

RegisterRoutes(app);

export default app;
