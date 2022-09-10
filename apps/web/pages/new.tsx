import Head from 'next/head';
import { useRouter } from 'next/router';
import { Editor } from '~/modules/editor';
import { Note } from '~/modules/types';

export default function New() {
    const router = useRouter();

    const onDone = async (content: string, text: string) => {
        const response = await fetch(`/api/new`, {
            method: 'POST',
            body: JSON.stringify({ content }),
        });

        const body: Note = await response.json();
        router.push(`/notes/${body.id}`);
    };

    return (
        <div>
            <Head>
                <title>New thought | @bairun_</title>
            </Head>
            <Editor onDone={onDone} />
        </div>
    );
}
