import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    try {
        const { body } = request;
        const content: string = JSON.parse(body).content;
        console.log('id', request.query.id);

        const start = content.indexOf('<h1>') + 4;
        const end = content.indexOf('</h1>');

        const newNote = await client.note.update({
            where: { id: Number(request.query.id) },
            data: {
                name: content.substring(start, end), // TODO: Parse name from first line of content
                content,
            },
        });

        return response.status(200).json(newNote);
    } catch (e) {
        console.error('error', e);
        return response.status(500).json({ error: `Cannot parse content from body", ${request.query.id}` });
    }
}
