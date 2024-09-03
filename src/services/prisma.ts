import { PrismaClient } from '@prisma/client';

export class Prisma {
  async start() {
    try {
      const prisma = new PrismaClient();
      await prisma.$connect();
      console.log('Agogochop db connected!');
    } catch (err) {
      console.log(err);
    }
  }
}
