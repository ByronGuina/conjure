import Link from 'next/link'
import Head from 'next/head'
import { Note } from '~/modules/types'

const notes: Note[] = [
	{
		id: 1,
		name: 'Note 1',
		content: 'Content 1',
		tags: [],
	},
]

export default function Index() {
	return (
		<div>
			<Head>
				<title>Thoughts | @bairun_</title>
			</Head>
			<ul className='font-sans space-y-1'>
				{notes.map((note) => (
					<li key={note.id}>
						<Link href={`/notes/${note.id}`}>{note.name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
