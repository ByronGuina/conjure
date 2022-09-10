import '../styles/app.css';
import { AppProps } from 'next/app';
import Link from 'next/link';
import Head from 'next/head';
import { useKeyboardShortcuts } from '~/modules/keyboard';
import { useRouter } from 'next/router';

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
    ]);

    return (
        <div>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
            </Head>
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
