import { BehaviorSubject } from 'rxjs';
import { Note } from '../types';

interface INetwork {
    getNotes(): Promise<Note[]>;
    getNote(id: number): Promise<Note>;
}

export class Notes {
    network: INetwork;

    // Stores all the local facts that are being tracked. These are added by the user.
    notes$ = new BehaviorSubject<Note[]>([]);

    constructor(network: INetwork) {
        this.network = network;
    }

    get notes() {
        return this.notes$.getValue();
    }

    note(id: number) {
        return this.notes.find((note) => note.id === id);
    }
}
