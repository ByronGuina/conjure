import { writable } from 'svelte/store';
import { browser } from '$app/env';

type ContentStorage = {
    content: string;
};

// read window position for a given id
// write window position for a given id
// store window positions in localStorage
// read window positions from localStorage
const LOCAL_STORAGE_KEY = 'CONTENT';

const content: ContentStorage = browser ? JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)) : '';

export const contentStore = writable(content);

contentStore.subscribe((wps) => {
    const newStoreValue = JSON.stringify(wps);

    if (browser) window.localStorage.setItem(LOCAL_STORAGE_KEY, newStoreValue);
});
