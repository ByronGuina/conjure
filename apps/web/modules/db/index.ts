import { Note, PrismaClient, Tag } from '@prisma/client';
import { OmitStrict } from '../types';

const client = new PrismaClient();

interface NoteWithTags extends Note {
    tags: Tag[];
}

export function withoutDates(note: NoteWithTags): OmitStrict<NoteWithTags, 'createdAt' | 'updatedAt'> {
    return {
        id: note.id,
        name: note.name,
        content: note.content,
        tags: note.tags,
    };
}

export function db() {
    return {
        notes: async () => await client.note.findMany({ include: { tags: true } }),
        note: async (id: string) =>
            await client.note.findUnique({ where: { id: Number(id) }, include: { tags: true } }),
    };
}
