import { Router} from "express";
import { SignIn, SignUp } from "./auth.controller";

const router = Router();

router.post('/sign_up', SignUp);
router.post('/sign_in', SignIn);

export const authRoutes = router;