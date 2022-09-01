import type { LinksFunction, MetaFunction } from '@remix-run/server-runtime';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import styles from './styles/app.css';
import fonts from './styles/app.css';

export const links: LinksFunction = () => {
    return [
        { rel: 'stylesheet', href: styles },
        {
            rel: 'stylesheet',
            href: fonts,
        },
    ];
};

export const meta: MetaFunction = () => ({
    charset: 'utf-8',
    title: 'New Remix App',
    viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
    return (
        <html lang='en'>
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <main className='layout'>
                    <Outlet />
                </main>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
