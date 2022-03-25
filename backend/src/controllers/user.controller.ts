import { Request, Response } from "express";
import { createUser } from "../services/user.service";

export async function registerUser(req: Request, res: Response) {
  const { username, email, password } = req.body;

  const new_user = await createUser(username, email, password);

  res.status(201).json(new_user);
}
