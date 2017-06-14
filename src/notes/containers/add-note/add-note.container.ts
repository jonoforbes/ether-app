import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { Note } from "../../entities/Note";
import { Observable } from "rxjs/Observable";
import { Validators, FormGroup, FormArray, FormBuilder } from "@angular/forms";
import { NotesSandbox } from "../../notes.sandbox"; 
import { NotesEditorGroupContainer } from "../../containers/notes-editor-group/notes-editor-group.container";

@Component({
    selector: "add-note",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div class="example-scrolling-content">
        


        <notes-editor-group (onSave)="onSave($event)"></notes-editor-group>

        
    </div>
    `
})
export class AddNoteContainer {

    constructor(private sb: NotesSandbox,
                
                 ) {
        
    }


    onSave(note: Note): void {
        this.sb.addNote(note);
    }

    
}