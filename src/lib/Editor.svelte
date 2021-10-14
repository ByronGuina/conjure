<script>
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import Placeholder from '@tiptap/extension-placeholder';
	import { contentStore } from './storage'

	let element;
	let editor;

	const initialContent = $contentStore.content || 'In a hole in a ground lived a hobbit...'

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit, Placeholder],
			content: initialContent,
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			},
			onUpdate: ({editor}) => contentStore.set({ content:editor.getHTML() })
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<div bind:this={element} />
