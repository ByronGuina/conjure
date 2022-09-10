import '../styles/app.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useKeyboardShortcuts } from '~/modules/keyboard';
import { useRouter } from 'next/router';
import { Search, toggleSearch } from '~/modules/search';
import { useEffect, useState } from 'react';
import { notes$ } from '~/modules/sync/store';
import { useSharedObservable } from '~/modules/sync/hook';
import { Note } from '~/modules/types';

function MyApp({ Component, pageProps }: AppProps) {
    const [isLoading, setIsLoading] = useState(false);
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
            .then((res) => {
                setIsLoading(true);
                return res.json();
            })
            .then((res: Note[]) => {
                setIsLoading(false);
                notes$.next(res);
            });
    }, []);

    return (
        <div className='relative'>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
            </Head>
            <Search notes={notes} />
            <div className='layout'>{!isLoading && <Component {...pageProps} />}</div>
        </div>
    );
};

export default MyApp;
