import 'reflect-metadata';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
import swaggerDocs from './config/swagger.json';
import './config/database';

const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/v1', routes);
app.listen(3000);
