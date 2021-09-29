<script>
	import Tiptap from '$lib/Editor.svelte';
</script>

<svelte:head>
	<link rel="preconnect stylesheet" href="https://rsms.me/inter/inter.css" />
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="editor-container">
	<Tiptap />
</main>

<style global>
	@import '../base.css';

	.editor-container {
		margin: var(--spacing-32) var(--spacing-8);
	}

	.ProseMirror {
		min-height: 90vh;
		caret-shape: underscore;
	}

	.ProseMirror-focused {
		outline: none;
	}
</style>
