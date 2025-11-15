import type { Request, Response } from "express";
import { AuthService } from "./auth.service.js";
import { RegisterDto } from "./auth.dto";
import { validateDto } from "../../common/validate-dto.common";

const authService = new AuthService();

export const SignUp = async(req: Request, res: Response) => {
  try {
    const dto = await validateDto(RegisterDto, req.body) as unknown as { email: string; password: string; name: string; };
    const result = await authService.register(dto);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};