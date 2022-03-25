import { Request, Response, NextFunction } from "express";
import { AnyObjectSchema } from "yup";
import { ErrorHandler } from "../utils/error";

export const validate =
  (schema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.validatedBody = await schema.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });

      return next();
    } catch (err: any) {
      return next(
        new ErrorHandler(
          400,
          err.errors.length !== 1 ? err.errors : err.message
        )
      );
    }
  };
