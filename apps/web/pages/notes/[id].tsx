import { Editor } from '~/modules/editor';
import { Note as NoteType } from '~/modules/types';

type Props = {
    note: NoteType;
};

const note = {
    id: '1',
    content: 'Hello World',
    tags: [],
};

export default function Note() {
    const onDone = (content: string) => {
        fetch(`/api/${note.id}`, {
            method: 'POST',
            body: JSON.stringify({ content }),
        });
    };

    return <Editor initialContent={note.content} onDone={onDone} />;
}
