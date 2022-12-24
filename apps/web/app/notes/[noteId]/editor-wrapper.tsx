'use client'

import { Note } from '@prisma/client'
import { Editor } from '~/modules/editor'

interface Props {
	note: Note
}

export function EditorWrapper({ note }: Props) {
	const whenDone = (content: string) => {
		console.log('content', content)
		fetch(`/api/${note.id}`, {
			method: 'POST',
			body: JSON.stringify({ content }),
		})
	}

	return <Editor initialContent={note.content} whenDone={whenDone} />
}
