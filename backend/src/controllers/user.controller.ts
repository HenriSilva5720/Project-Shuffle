import { Request, Response } from "express";
import { createUser } from "../services/user.service";

export async function registerUser(req: Request, res: Response) {
  const { username, email, password } = req.validatedBody;

  const new_user = await createUser(username, email.toLowerCase(), password);

  const { passwordHash, ...userDate } = new_user;

  res.status(201).json(userDate);
}
