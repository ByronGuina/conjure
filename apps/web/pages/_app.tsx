import '../styles/app.css';
import { AppProps } from 'next/app';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
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
}

export default MyApp;
