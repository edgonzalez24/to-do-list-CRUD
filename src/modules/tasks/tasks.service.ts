import { prisma } from "../../config/prisma.config.js"

export class TaskService {

  async findAll() {
    const tasks = await prisma.task.findMany();
    return tasks;
  }
}