import express, { Express } from "express";
import userRoutes from "./user.routes";

function routes(app: Express) {
  app.use(express.json());

  userRoutes(app);
}

export default routes;
