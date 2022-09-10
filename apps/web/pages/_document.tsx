import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <meta charSet='utf-8' />
                <meta property='og:type' content='website' />

                {/* Essential for socials */}
                {/* <title>Thoughts | @bairun_</title> */}
                <meta property='og:title' content='Thoughts | @bairun_' />
                <meta name='description' content='Collected thoughts tool by @bairun_' />
                <meta property='og:description' content='Collected thoughts tool by @bairun_' />
                <meta name='twitter:card' content='summary_large_image' />
                {/* TODO: Base image off image in content -- once library is open. Prob will come from CDN */}
                <meta property='og:image' content='/site.png' />

                {/* Less essential */}
                <meta property='og:site_name' content='innervate.vercel.app' />
                <meta name='twitter:site' content='@bairun_' />
                <meta name='twitter:creator' content='@bairun_' />
                <meta name='theme-color' content='#f2f2f0' />

                <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />

                <link rel='shortcut icon' type='image/png' href='/favicon.png' />
                <link rel='apple-touch-icon' href='/favicon.png' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
