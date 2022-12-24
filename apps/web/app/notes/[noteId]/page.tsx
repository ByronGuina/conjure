import { redirect } from 'next/navigation'
import { db } from '~/modules/db'
import { EditorWrapper } from './editor-wrapper'

interface Props {
	params: {
		noteId: string
	}
}

export default async function NotePage({ params }: Props) {
	const note = await db().note(params.noteId)

	if (!note) redirect('/')

	return <EditorWrapper note={note} />
}
