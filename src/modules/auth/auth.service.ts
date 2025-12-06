import { prisma } from "../../config/prisma.config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthService {

  async login(dto: { email: string; password: string }) {

    const user = await prisma.user.findFirst({
      where: { email: dto.email }
    });

    if (!user || !(await bcrypt.compare(dto.password, user.password))) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET as string, {
    expiresIn: '1h',
  });
    return {
      user,
      token
    }
  }

  async register(dto: { email: string; password: string; name: string; }) {
    const hashed = await bcrypt.hash(dto.password, 10);
    const user = await prisma.user.create({
      data: {
        ...dto,
        password: hashed
      }
    })
    
    return user;
  }

}
