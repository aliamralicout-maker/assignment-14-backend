
import { User } from './User/user.js'
import { Admin } from './Admin/admin.js'
import { Note } from './Note/note.js'
import { NoteBook } from './NoteBook/noteBook.js'
import { Storage } from './Storage/storage.js'

// 1. Create Users
const user1 = new User(1, "Ali", "ali@gmail.com", "123456", "01012345678", 25)

const admin1 = new Admin(2, "Ahmed", "ahmed@gmail.com", "admin123", "01098765432", 30)

console.log("========== USER INFO ==========")
user1.displayInfo()

// 2. Create Notebooks
const notebook1 = new NoteBook()
const notebook2 = new NoteBook()

// 3. Add Notebooks to User
user1.addNoteBook(notebook1)
user1.addNoteBook(notebook2)

// 4. Create Notes
const note1 = new Note(
    1,
    "TypeScript",
    "TypeScript is a strongly typed programming language built on JavaScript.",
    user1
)

const note2 = new Note(
    2,
    "OOP",
    "Object Oriented Programming has four main principles.",
    user1
)


// Add Notes to Notebook
notebook1.addNote(note1)
notebook1.addNote(note2)



console.log(user1.noteBooks)

// Preview Notes

console.log(note1.preview())
console.log(note2.preview())


const adminNotebook = new NoteBook()
admin1.addNoteBook(adminNotebook)

const adminNote = new Note(
    4,
    "Admin Note",
    "This note was added by the admin.",
    admin1
)

console.log(admin1.addNoteToNotebook(adminNote, adminNotebook))

// Remove Note
notebook1.removeNote(note1)

console.log(" AFTER REMOVE ")
console.log(notebook1.notes)

// Generic Storage with Notes
const noteStorage = new Storage<Note>()

noteStorage.add(note1)
noteStorage.add(note2)


console.log(" STORAGE ")
console.log(noteStorage.getAll())

noteStorage.remove(note2)

console.log(" STORAGE AFTER REMOVE ")
console.log(noteStorage.getAll())

// Generic Storage with Strings
const stringStorage = new Storage<string>()

stringStorage.add("Ali")
stringStorage.add("Ahmed")
stringStorage.add("Mohamed")

console.log(" STRING STORAGE ")
console.log(stringStorage.getAll())
