import { prisma } from "../../config/prisma.config";

export class AuthService {

  async login(dto: { email: string; password: string }) {
    return {
      message: `User logged: ${dto.email}`
    };
  }

  async register(dto: { email: string; password: string; name: string; }) {
    const user = await prisma.user.create({
      data: dto
    })
    
    return user;
  }

}
