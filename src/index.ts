import express, { Request, Response } from "express";
import mongoose from "mongoose";

import "dotenv/config";
import router from "./routes/Product";

const app = express();
const PORT = process.env.PORT;

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

connectToDB();

app.get("/", (req: Request, res: Response) => {
  let x: string = "asdasd";
  const y = x.charAt(1);
  res.json({ hello: "world" });
});

app.post("/api/product/new", (req: Request, res: Response) => {
  res.json({ message: "New Product" });
});

