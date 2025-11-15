import 'reflect-metadata';
import app from "./app.js";
import { AppDataSource } from "./config/database.config.js";

const PORT = process.env.PORT || 8000;

try {
  AppDataSource.initialize();
  app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
} catch (error) {
  console.error(error)
}