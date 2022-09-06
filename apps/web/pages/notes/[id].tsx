import { Editor } from '~/modules/editor';
import { PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next';
import { Note as NoteType } from '~/modules/types';

const client = new PrismaClient();

type Props = {
    note: NoteType;
};

export default function Note({ note }: Props) {
    const onDone = (content: string) => {
        fetch(`/api/${note.id}`, {
            method: 'POST',
            body: JSON.stringify({ content }),
        });
    };

    return (
        <div>
            <Editor initialContent={note.content} onDone={onDone} />
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    if (!params?.id) throw new Error('Note not found');
    const id = params.id as string;

    const note = await client.note.findUnique({
        where: { id: Number(id) },
    });

    if (!note) {
        throw new Error('Note not found');
    }

    return {
        props: {
            note: {
                id: note.id,
                name: note.name,
                content: note.content,
            },
        },
    };
};
