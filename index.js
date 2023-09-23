import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.url, new Date().toLocaleTimeString());
  next();
});

// routes
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
