import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(
  username: string,
  email: string,
  password: string
) {
  const new_user = await prisma.user.create({
    data: {
      username: username,
      email: email,
      password: password,
    },
  });

  return new_user;
}
