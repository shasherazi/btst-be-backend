import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.js";
import { taskRouter } from "./routes/task.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use((req, _, next) => {
  console.log(req.method, req.url, new Date().toLocaleTimeString());
  next();
});

// routes
app.use("/users", userRouter);
app.use("/users/:id/tasks", taskRouter);

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
