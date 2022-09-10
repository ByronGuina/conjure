import '../styles/app.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useKeyboardShortcuts } from '~/modules/keyboard';
import { useRouter } from 'next/router';
import { Search, toggleSearch } from '~/modules/search';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

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

    return (
        <div className='relative'>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
            </Head>

            <Search />

            <div className='layout'>
                <Component {...pageProps} />
            </div>
        </div>
    );
};

export default MyApp;
