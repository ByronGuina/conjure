import { Note } from '~/modules/types'
import { EditorWrapper } from './editor-wrapper'

const note: Note = {
	id: 1,
	name: 'Hello world',
	content: 'Hello World',
	tags: [],
}

export default function NotePage() {
	return <EditorWrapper note={note} />
}
