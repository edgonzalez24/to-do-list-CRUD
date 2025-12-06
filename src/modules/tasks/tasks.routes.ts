import { Router} from "express";
import { findAllTasks } from './tasks.controller.js';

const router = Router();

router.get('/all', findAllTasks);

export const tasksRoutes = router;