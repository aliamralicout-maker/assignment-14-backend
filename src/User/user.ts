import { NoteBook } from '../NoteBook/noteBook.js'

export class User {
    protected id: number;
    public name: string;
    public email: string;
    private password: string;
    public phone: string;
    public age: number;
    public noteBooks: NoteBook[] = []

    constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
        if (age < 18 || age > 60) throw new Error("Invalid age")
        this.age = age
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.phone = phone
    }

    displayInfo() {
        console.log({
            id: this.id,
            name: this.name,
            email: this.email,
            phone: this.phone,
            age: this.age
        })
    }

    getUserId() {
        return this.id
    }

    addNoteBook(noteBook: NoteBook) {
        this.noteBooks.push(noteBook)
    }

}