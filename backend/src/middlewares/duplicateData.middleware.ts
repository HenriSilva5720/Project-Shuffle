import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { ErrorHandler } from "../utils/error";

const prisma = new PrismaClient();

export async function duplicateUsername(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { username } = req.validatedBody;

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (user) {
      return next(new ErrorHandler(409, "username already exists"));
    }

    return next();
  } catch (err: any) {
    return next(err);
  }
}

export async function duplicateEmail(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { email } = req.validatedBody;

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (user) {
      return next(new ErrorHandler(409, "email already exists"));
    }

    return next();
  } catch (err: any) {
    return next(err);
  }
}
