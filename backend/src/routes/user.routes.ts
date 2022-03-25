import { Express, Router } from "express";
import { registerUser } from "../controllers/user.controller";
import { validate } from "../middlewares/validate.middleware";
import { userRegisterSchema } from "../schemas/user.schemas";

const route = Router();

function userRoutes(app: Express) {
  app.use("/users", route);

  route.post("/signup", validate(userRegisterSchema), registerUser);
}

export default userRoutes;
