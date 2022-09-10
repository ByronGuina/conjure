import { BehaviorSubject } from 'rxjs';
import { useSharedObservable } from '../sync/hook';
import { Command } from 'cmdk';
import { useRouter } from 'next/router';
import { Note } from '../types';

export const search$ = new BehaviorSubject<{ isOpen: boolean }>({ isOpen: false });
export const toggleSearch = () => search$.next({ isOpen: !search$.getValue().isOpen });

type Props = {
    notes: Note[];
};

export function Search({ notes }: Props) {
    const snapshot = useSharedObservable(search$);
    const router = useRouter();

    const onSelect = (id: number) => {
        router.push(`/notes/${id}`);
        toggleSearch();
    };

    return (
        <Command.Dialog open={snapshot.isOpen} onOpenChange={toggleSearch} label='Global Command Menu'>
            <Command.Input />
            <Command.List>
                <Command.Empty>No results found.</Command.Empty>

                <Command.Group>
                    {notes.map((note) => (
                        <Command.Item key={note.id} onSelect={() => onSelect(note.id)}>
                            {note.name}
                        </Command.Item>
                    ))}
                </Command.Group>
            </Command.List>
        </Command.Dialog>
    );
}
