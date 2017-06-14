import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { Note } from "../../entities/Note";
import { NotesSandbox } from "../../notes.sandbox";

@Component({
    selector: "notes-master-list",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <button md-button (click)="addNote()" style="text-align: left !important; padding: 5px; margin-top: -10px;">
          <p style="margin: 4px 170px 4px 10px;">+ &nbsp; &nbsp;Add New Note</p>
        </button>
        <md-nav-list>
        <button md-button fxLayoutAlign="start" *ngFor="let note of notes" (click)="selectDetail(note)">
          
          <md-icon>note</md-icon>
            <h3 md-line>{{note.content | stripTags | slice:0:35}}</h3>
            
          
          </button>

      </md-nav-list>
    `
})
export class NotesMasterListComponent {
    @Input() notes: Array<Note>;

    constructor( private router: Router) {

    }
    addNote() {
        this.router.navigate(['/notes', {outlets: {'m': ['list'], 'd': ['add']}}]);
    }

    selectDetail(note: Note) {
        this.router.navigate(['/notes', {outlets: {'m': ['list'], 'd': [note._id]}}]);
    }
    
}