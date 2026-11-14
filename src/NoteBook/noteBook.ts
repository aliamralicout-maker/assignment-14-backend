import { Note } from '../Note/note.js'


export class NoteBook {
    public notes: Note[] = []

    addNote(note: Note) {
        this.notes.push(note)
    }

    removeNote(note: Note) {
        const index = this.notes.findIndex(i => i === note)
        if (index === -1) throw new Error("not found note");
        this.notes.splice(index, 1)
    }

}