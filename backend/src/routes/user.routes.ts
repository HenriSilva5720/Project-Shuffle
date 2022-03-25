import { Express, Router } from "express";
import { registerUser } from "../controllers/user.controller";

const route = Router();

function userRoutes(app: Express) {
  app.use("/user", route);

  route.post("", registerUser);
}

export default userRoutes;
