import { Router} from 'express';
import { authRoutes } from '../modules/auth/auth.routes.js';
import { tasksRoutes } from '../modules/tasks/tasks.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/tasks', tasksRoutes);

export default router;