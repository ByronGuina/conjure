import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/app.css';

function MyApp({ Component, pageProps }: AppProps) {
    // useKeyboardShortcuts([
    //     {
    //         key: 'n',
    //         cb: () => router.push('/new'),
    //     },
    //     {
    //         key: 'h',
    //         cb: () => router.push('/'),
    //     },
    //     {
    //         key: '/',
    //         cb: () => console.log('Search keybind'),
    //     },
    // ]);

    return (
        <div className='relative'>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
            </Head>
            <div className='layout'>
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;
