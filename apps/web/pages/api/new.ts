import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    try {
        const { body } = request;
        const content = JSON.parse(body).content as string;

        const start = content.indexOf('<h1>') + 4;
        const end = content.indexOf('</h1>');

        const newNote = await client.note.create({
            data: {
                name: content.substring(start, end), // TODO: Parse name from first line of content
                content,
            },
        });

        return response.status(200).json(newNote);
    } catch (e) {
        return response.status(500).json({ error: `Cannot parse content from body", ${request.query.id}` });
    }
}
