import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export default async function handler(_: NextApiRequest, response: NextApiResponse) {
    const notes = await client.note.findMany();
    return response.status(200).json(
        notes.map((note) => ({
            id: note.id,
            name: note.name,
            content: note.content,
        })),
    );
}
