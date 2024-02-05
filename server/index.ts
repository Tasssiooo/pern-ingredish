import express from "express";
import cors from "cors";

import userRouter from "./routes/user";

const app = express();
const port = 3000;

//Middleware
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
