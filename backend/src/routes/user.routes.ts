import { Express, Router } from "express";
import { registerUser } from "../controllers/user.controller";

const route = Router();

function userRoutes(app: Express) {
  app.use("/users", route);

  route.post("/signup", registerUser);
}

export default userRoutes;
