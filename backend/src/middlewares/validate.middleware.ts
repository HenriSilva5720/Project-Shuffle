import { Request, Response, NextFunction } from "express";
import { AnyObjectSchema } from "yup";

export const validate =
  (schema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.validatedBody = await schema.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });

      next();
    } catch (err: any) {
      return res.status(400).json({
        status: "error",
        statusCode: 400,
        message: err.errors.length !== 1 ? err.errors : err.message,
      });
    }
  };
