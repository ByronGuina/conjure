import '../styles/app.css';
import { AppProps } from 'next/app';
import Link from 'next/link';
import React from 'react';
import { Note } from '~/modules/types';
import { useKeyboardShortcuts } from '~/modules/keyboard';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
    const [notes, setNotes] = React.useState<Note[]>([]);
    const router = useRouter();

    useKeyboardShortcuts([
        {
            key: '/',
            cb: () => router.push('/new'),
        },
        {
            key: 'h',
            cb: () => router.push('/'),
        },
    ]);

    // TODO: Some external state store
    React.useEffect(() => {
        fetch('/api/notes')
            .then((response) => response.json())
            .then(setNotes);
    }, [setNotes]);

    return (
        <div>
            <nav className='navbar flex justify-between w-full'>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/new'>
                    <a>New</a>
                </Link>
            </nav>
            <div className='layout'>
                <Component {...pageProps} />
            </div>
        </div>
    );
};

export default MyApp;
