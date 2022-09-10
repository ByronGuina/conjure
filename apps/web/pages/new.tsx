import Head from 'next/head';
import { useRouter } from 'next/router';
import { Editor } from '~/modules/editor';
import { notes$ } from '~/modules/sync/store';
import { Note } from '~/modules/types';

export default function New() {
    const router = useRouter();

    // TODO: Abstract to editor domain service
    const onDone = async (content: string) => {
        const response = await fetch(`/api/new`, {
            method: 'POST',
            body: JSON.stringify({ content }),
        });

        const body: Note = await response.json();
        notes$.next([...notes$.value, body]);
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
