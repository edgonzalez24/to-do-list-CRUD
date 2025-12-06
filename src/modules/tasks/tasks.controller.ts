import type { Request, Response } from "express";
import { TaskService } from "./tasks.service.js";

const taskService = new TaskService();

export const findAllTasks = async(req: Request, res: Response) => {
  /* 
    #swagger.tags = ['Tasks']
    #swagger.description = 'List all tasks'
  */
  try {
    const result = await taskService.findAll();
    res.json({
      status: 'success',
      tasks: result
    });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
}