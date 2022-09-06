import { PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Note } from '~/modules/types';

const client = new PrismaClient();

type Props = {
    notes: Note[];
};

export default function Index({ notes }: Props) {
    return (
        <div>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        <Link href={`/notes/${note.id}`}>
                            <a>{note.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const notes = await client.note.findMany();

    return {
        props: {
            notes: notes.map((note) => ({
                id: note.id,
                name: note.name,
                content: note.content,
            })),
        },
    };
};
