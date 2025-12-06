import express from "express";
import routes from "./routes/index.routes.js";
import dotenv from "dotenv";
import passport from "./config/passport.config.js";
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../swagger.json' with { type: "json" };

dotenv.config();
const app = express();
app.use(express.json());
app.use(passport.initialize());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/api', routes);

export default app;