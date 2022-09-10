import { useEffect } from 'react';
import { editor$ } from '../editor';
import { search$ } from '../search';
import { useSharedObservable } from '../sync/hook';

export type Shortcut = {
    key: string;
    cb: () => void;
};

// Need to turn off keyboard shortcuts while typing in a textarea
export const useKeyboardShortcuts = (shortcuts: Shortcut[]) => {
    const editorState = useSharedObservable(editor$);
    const searchState = useSharedObservable(search$);

    useEffect(() => {
        let handlers: ((e: KeyboardEvent) => void)[] = [];

        if (window) {
            shortcuts.forEach((shortcut) => {
                const handler = (e: KeyboardEvent) => {
                    if (e.key === shortcut.key && !editorState.isFocused && !searchState.isOpen) {
                      shortcut.cb();
                      e.preventDefault();
                    }
                };

                window.addEventListener('keydown', handler);
                handlers.push(handler);
            });
        }

        return () => handlers.forEach((handler) => window.removeEventListener('keydown', handler));
    }, [shortcuts, editorState, searchState]);
};
