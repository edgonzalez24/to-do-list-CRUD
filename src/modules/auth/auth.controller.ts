import type { Request, Response } from "express";
import { AuthService } from "./auth.service.js";
import { LoginDto, RegisterDto } from "./auth.dto.js";
import { validateDto } from "../../common/validate-dto.common.js";

const authService = new AuthService();

export const SignUp = async(req: Request, res: Response) => {
  /* 
    #swagger.tags = ['Auth']
    #swagger.description = 'Register a new user'
    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
            email: "test@gmail.com",
            password: "123456",
            name: "John Doe"
        }
    }
  */
  try {
    const dto = await validateDto(RegisterDto, req.body) as unknown as { email: string; password: string; name: string; };
    const result = await authService.register(dto);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const SignIn = async(req: Request, res: Response) => {
  /* 
    #swagger.tags = ['Auth']
    #swagger.description = 'Login an existing user'
    #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
            email: "test@gmail.com",
            password: "123456",
        }
    }
  */
  try {
    const dto = await validateDto(LoginDto, req.body) as unknown as { email: string; password: string; };
    const result = await authService.login(dto);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};