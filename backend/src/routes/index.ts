import express, { Express, Request, Response, NextFunction } from "express";
import userRoutes from "./user.routes";
import { ErrorHandler, handleError } from "../utils/error";

function routes(app: Express) {
  app.use(express.json());

  userRoutes(app);

  app.use(
    (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
      handleError(err, res);
    }
  );
}

export default routes;
