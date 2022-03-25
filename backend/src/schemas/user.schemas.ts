import * as yup from "yup";
import { hashSync } from "bcrypt";

export const userRegisterSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .transform((value: string) => hashSync(value, 10)),
});
