'use client'

import { Note } from '@prisma/client'
import { Editor } from '~/modules/editor'
import { useRouter } from 'next/navigation'

export function EditorWrapper() {
	const router = useRouter()

	// TODO: Abstract to editor domain service
	const onDone = async (content: string) => {
		const response = await fetch(`/api/new`, {
			method: 'POST',
			body: JSON.stringify({ content }),
		})

		const body: Note = await response.json()
		router.push(`/notes/${body.id}`)
	}

	return <Editor whenDone={onDone} />
}
