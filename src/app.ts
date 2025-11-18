import express from "express";
import routes from "./routes/index.routes.js";
import dotenv from "dotenv";
import passport from "./config/passport.config.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(passport.initialize());
app.use('/api', routes);

export default app;