import local from '@next/font/local'

import '../styles/app.css'
import '../styles/fonts.css'

const duo = local({
	src: [
		{
			path: '../public/fonts/iAWriterDuospace-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/iAWriterDuospace-Italic.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../public/fonts/iAWriterDuospace-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../public/fonts/iAWriterDuospace-BoldItalic.woff2',
			weight: '700',
			style: 'italic',
		},
	],
	variable: '--font-duospace',
})

interface Props {
	children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
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
		<html lang="en">
			<head>
				<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
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
			</head>
			<body className={duo.variable}>
				<div className='layout'>{children}</div>
			</body>
		</html>
	)
}
