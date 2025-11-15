import { Router} from "express";
import { SignUp } from "./auth.controller";

const router = Router();

router.post('/sign_up', SignUp);

export const authRoutes = router;