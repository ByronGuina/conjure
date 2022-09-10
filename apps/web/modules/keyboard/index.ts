import { useEffect } from 'react';
import { editor$ } from '../editor';
import { useSharedObservable } from '../sync/hook';

export type Shortcut = {
    key: string;
    cb: { (): void };
};

// Need to turn off keyboard shortcuts while typing in a textarea
export const useKeyboardShortcuts = (shortcuts: Shortcut[]) => {
    const editorState = useSharedObservable(editor$);

    useEffect(() => {
        let handlers: ((e: KeyboardEvent) => void)[] = [];

        if (window) {
            shortcuts.forEach((shortcut) => {
                const handler = (e: KeyboardEvent) => {
                    if (e.key === shortcut.key && e.ctrlKey && !editorState.isFocused) {
                        shortcut.cb();
                    }
                };
                window.addEventListener('keydown', handler);
                handlers.push(handler);
            });
        }

        return () => handlers.forEach((handler) => window.removeEventListener('keydown', handler));
    }, [shortcuts, editorState]);
};
