import { Request, Response } from "express";

export const new_product = (req: Request, res: Response)=> {
  res.json({ message: "New Product" });
}