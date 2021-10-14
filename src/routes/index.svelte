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
		min-height: 80vh;
		caret-shape: underscore;
	}

	.ProseMirror-focused {
		outline: none;
	}

	.ProseMirror h1 {
		margin-top: var(--spacing-64);
		margin-bottom: var(--spacing-16);
	}

	.ProseMirror h2 {
		margin-top: var(--spacing-32);
		margin-bottom: var(--spacing-8);
	}

	.ProseMirror h3 {
		margin-top: var(--spacing-8);
		margin-bottom: var(--spacing-4);
	}

	.ProseMirror p {
		margin-top: 0;
		margin-bottom: var(--spacing-8);
	}

	.ProseMirror li {
		margin-top: 0;
		margin-bottom: var(--spacing-4);
		list-style: square;
	}
</style>
