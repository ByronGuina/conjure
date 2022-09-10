import Link from 'next/link';
import Head from 'next/head';
import { useSharedObservable } from '~/modules/sync/hook';
import { notes$ } from '~/modules/sync/store';

export default function Index() {
    const notes = useSharedObservable(notes$);

    return (
        <div>
            <Head>
                <title>Thoughts | @bairun_</title>
            </Head>
            <ul className='font-sans space-y-1'>
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
