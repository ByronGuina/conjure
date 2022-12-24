import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export function db() {
    return {
        notes: async () => await client.note.findMany(),
        note: async (id: string) => await client.note.findUnique({ where: { id: Number(id) } }),
    };
}
