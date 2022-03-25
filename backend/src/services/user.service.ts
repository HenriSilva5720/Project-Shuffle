import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(
  username: string,
  email: string,
  passwordHash: string
) {
  const new_user = await prisma.user.create({
    data: {
      username,
      email,
      passwordHash,
    },
  });

  return new_user;
}
