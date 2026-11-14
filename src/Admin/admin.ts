import { User } from '../User/user.js'
import { Note } from '../Note/note.js'
import { NoteBook } from '../NoteBook/noteBook.js'

export class Admin extends User {


    constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
        super(id, name, email, password, phone, age)
    }

    addNoteToNotebook(note: Note, noteBook: NoteBook) {
        if (this.noteBooks.includes(noteBook)) {
            noteBook.addNote(note)
            return { message: "note added successfully" }
        }
        return { message: "not found" }
    }


}