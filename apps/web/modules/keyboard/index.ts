import { useEffect } from 'react';

export type Shortcut = {
    key: string;
    cb: () => void;
};

// Need to turn off keyboard shortcuts while typing in a textarea
export const useKeyboardShortcuts = (shortcuts: Shortcut[]) => {
    useEffect(() => {
        let handlers: ((e: KeyboardEvent) => void)[] = [];

        if (window) {
            shortcuts.forEach((shortcut) => {
                const handler = (e: KeyboardEvent) => {
                    if (e.key === shortcut.key) {
                        shortcut.cb();
                        e.preventDefault();
                    }
                };

                window.addEventListener('keydown', handler);
                handlers.push(handler);
            });
        }

        return () => handlers.forEach((handler) => window.removeEventListener('keydown', handler));
    }, [shortcuts]);
};
