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
			<div className='flex items-center justify-between mb-3 font-sans'>
				<h1 className='font-semibold'>NOTES</h1>
				<Link href="/new" className='border border-zinc-900 px-2 py-1 flex items-center gap-2'>
					<span>+</span> <span>NEW</span>
				</Link>
			</div>
			<ul className='space-y-1'>
				{notes.map((note) => (
					<li key={note.id}>
						<Link href={`/notes/${note.id}`}>{note.name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
