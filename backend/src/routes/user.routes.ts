import { Express, Router } from "express";
import { registerUser } from "../controllers/user.controller";
import { validate } from "../middlewares/validate.middleware";
import {
  duplicateUsername,
  duplicateEmail,
} from "../middlewares/duplicateData.middleware";
import { userRegisterSchema } from "../schemas/user.schemas";

const route = Router();

function userRoutes(app: Express) {
  app.use("/user", route);

  route.post(
    "/signup",
    validate(userRegisterSchema),
    duplicateUsername,
    duplicateEmail,
    registerUser
  );
}

export default userRoutes;
