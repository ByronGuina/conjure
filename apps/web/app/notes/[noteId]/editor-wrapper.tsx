'use client'

import { Editor } from '~/modules/editor'
import { Note } from '~/modules/types'

interface Props {
	note: Note
}

export function EditorWrapper({ note }: Props) {
	const whenDone = (content: string) => {
		fetch(`/api/${note.id}`, {
			method: 'POST',
			body: JSON.stringify({ content }),
		})
	}

	return <Editor initialContent={note.content} whenDone={whenDone} />
}
