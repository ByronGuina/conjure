import { Editor } from '~/modules/editor';
import { PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next';

const client = new PrismaClient();

type Logbook = {
    id: number;
    name: string;
    content: string;
};

type Props = {
    logbook: Logbook;
};

export default function Index({ logbook }: Props) {
    const onDone = (content: string) => {
        fetch(`/api/${logbook.id}`, {
            method: 'POST',
            body: JSON.stringify({ content }),
        });
    };

    return (
        <div className='layout'>
            <Editor initialContent={logbook.content} onDone={onDone} />
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const logbook = await client.note.findUnique({
        where: { id: 1 },
    });

    if (!logbook) {
        throw new Error('Logbook not found');
    }

    console.log(logbook.content);

    return {
        props: {
            logbook: {
                id: logbook.id,
                name: logbook.name,
                content: logbook.content,
            },
        },
    };
};
