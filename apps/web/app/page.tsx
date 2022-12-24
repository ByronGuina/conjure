import Link from 'next/link'
import { db } from '~/modules/db'

// const notes: Note[] = [
// 	{
// 		id: 1,
// 		name: 'Note 1',
// 		content: 'Content 1',
// 		tags: [],
// 	},
// ]

export default async function Index() {
	const notes = await db().notes()

	return (
		<div>
			<h1>Notes</h1>
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
