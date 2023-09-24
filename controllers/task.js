import { PrismaClient } from "@prisma/client";

const prism = new PrismaClient();
const Task = prism.task;

// GET /users/:id/tasks
export const getAllTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await Task.findMany({
      where: {
        userId: id,
      },
    });
    res.json(tasks);
  } catch (error) {
    res.json(error);
  }
};

// GET /users/:id/tasks/:taskId
export const getTaskById = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await Task.findUnique({
      where: {
        id: taskId,
      },
    });
    res.json(task);
  } catch (error) {
    res.json(error);
  }
};

// POST /users/:id/tasks
export const createTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    if (!title) {
      return res.status(400).json({ error: "Missing title" });
    }

    const task = await Task.create({
      data: {
        title,
        description,
        userId: id,
      },
    });
    res.json(task);
  } catch (error) {
    res.json(error);
  }
};

// PUT /users/:id/tasks/:taskId
export const updateTask = async (req, res) => {
  const { taskId } = req.params;
  const { title, description } = req.body;
  try {
    const task = await Task.update({
      where: {
        id: taskId,
      },
      data: {
        title,
        description,
      },
    });
    res.json(task);
  } catch (error) {
    res.json(error);
  }
};

// DELETE /users/:id/tasks/:taskId
export const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await Task.delete({
      where: {
        id: taskId,
      },
    });
    res.json(task);
  } catch (error) {
    res.json(error);
  }
};
