import '../styles/app.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useKeyboardShortcuts } from '~/modules/keyboard';
import { useRouter } from 'next/router';
import { Search, toggleSearch } from '~/modules/search';
import { useEffect } from 'react';
import { notes$ } from '~/modules/sync/store';
import { useSharedObservable } from '~/modules/sync/hook';
import { Note } from '~/modules/types';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const notes = useSharedObservable(notes$);

    useKeyboardShortcuts([
        {
            key: 'n',
            cb: () => router.push('/new'),
        },
        {
            key: 'h',
            cb: () => router.push('/'),
        },
        {
            key: '/',
            cb: () => toggleSearch(),
        },
    ]);

    useEffect(() => {
        fetch('/api/notes')
            .then((res) => res.json())
            .then((res: Note[]) => {
                console.log(res);
                notes$.next(res);
            });
    }, []);

    return (
        <div className='relative'>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
            </Head>

            <Search notes={notes} />

            <div className='layout'>
                <Component {...pageProps} />
            </div>
        </div>
    );
};

export default MyApp;
