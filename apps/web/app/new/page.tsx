import Head from 'next/head'
import { EditorWrapper } from './editor-wrapper'

export default function New() {
	return (
		<div>
			<Head>
				<title>New thought | @bairun_</title>
			</Head>
			<EditorWrapper />
		</div>
	)
}
