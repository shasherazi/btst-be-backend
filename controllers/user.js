import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const User = prisma.user;

// GET /users
export const getAllUsers = async (_, res) => {
  try {
    const users = await User.findMany();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
};

// GET /users/:id
export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findUnique({
      where: {
        id,
      },
    });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

// POST /users
export const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({ error: "Missing data" });
    }

    if (
      User.findUnique({ where: { email } }) ||
      User.findUnique({ where: { username } })
    ) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = await User.create({
      data: {
        username,
        email,
        password,
      },
    });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

// PUT /users/:id
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  try {
    const user = await User.update({
      where: {
        id,
      },
      data: {
        username,
        email,
        password,
      },
    });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

// DELETE /users/:id
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.delete({
      where: {
        id,
      },
    });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};
