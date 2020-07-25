import { Injectable } from '@angular/core';
import { Note } from './note';
import { ToDo } from '../todo/to-do';

@Injectable({
    providedIn: 'root'
  })
  export class NoteService {
    lastId: number = 0;
    notes: Note[] = [];

    constructor() {};

    addNote(note: Note): NoteService {
        if(!note.id) note.id = ++this.lastId;
        note.dateCreated = new Date();
        this.notes.push(note);
        return this;
    }

    deleteNoteById(id: number): NoteService {
        this.notes = this.notes.filter(note => note.id !== id);
        return this;
    }

    getAllNotes(): Note[] {
        return this.notes;
    }
  };