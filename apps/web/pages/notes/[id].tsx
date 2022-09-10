import Link from 'next/link';
import { useRouter } from 'next/router';
import { Editor } from '~/modules/editor';
import { useSharedObservable } from '~/modules/sync/hook';
import { notes$ } from '~/modules/sync/store';
import { Note as NoteType } from '~/modules/types';

type Props = {
    note: NoteType;
};

export default function Note() {
    const router = useRouter();
    const notes = useSharedObservable(notes$);
    const note = notes.find((note) => note.id === Number(router.query.id as string));

    if (!note) {
        return (
            <div>
                <h1>This note does not exist</h1>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </div>
        );
    }

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
