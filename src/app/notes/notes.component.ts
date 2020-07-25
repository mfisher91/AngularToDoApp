import { Component } from '@angular/core';
import { Note } from './note';
import { NoteService } from './note.service';

@Component({
  selector: 'app-root',
  templateUrl: './notes.html',
  styleUrls: ['./notes.css']
})
export class NotesComponent {
    newNote: Note = new Note();

    constructor(private noteService: NoteService) {}

    addNote() {
        this.noteService.addNote(this.newNote);
        this.newNote = new Note();
    }

    removeNote(note) {
        this.noteService.deleteNoteById(note.id);
    }

    get notes() {
        return this.noteService.getAllNotes();
        return [];
    }
}