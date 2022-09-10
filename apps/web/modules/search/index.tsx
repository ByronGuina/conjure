import { BehaviorSubject } from 'rxjs';
import { useSharedObservable } from '../sync/hook';
import { Command } from 'cmdk';
import { useRouter } from 'next/router';

export const search$ = new BehaviorSubject<{ isOpen: boolean }>({ isOpen: false });
export const toggleSearch = () => search$.next({ isOpen: !search$.getValue().isOpen });

export function Search() {
    const snapshot = useSharedObservable(search$);
    const router = useRouter();

    return (
        <Command.Dialog open={snapshot.isOpen} onOpenChange={toggleSearch} label='Global Command Menu'>
            <Command.Input />
            <Command.List>
                <Command.Empty>No results found.</Command.Empty>

                <Command.Group heading='Thoughts'>
                    <Command.Item onSelect={() => router.push('/notes/16')}>a</Command.Item>
                    <Command.Separator />
                    <Command.Item>c</Command.Item>
                </Command.Group>
            </Command.List>
        </Command.Dialog>
    );
}
