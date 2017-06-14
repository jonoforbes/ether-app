import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";
import { Note } from "../../entities/Note";
import { Observable } from "rxjs/Observable";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { NotesSandbox } from "../../notes.sandbox"; 
import { NotesDetailHeaderComponent } from "../../components/detail-header/detail-header.component";
import { NotesDetailEditorComponent } from "../../components/detail-editor/detail-editor.component";

@Component({
    selector: "notes-editor-group",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    
        
        <form [formGroup]="noteForm" novalidate (ngSubmit)="onSubmit()">

        <notes-detail-header [noteForm]="this.noteForm" [note]="this.note" (submitForm)="onSubmit()"></notes-detail-header>
   
        


        <notes-detail-editor [noteForm]="this.noteForm" (remove)="onRemove(note)"></notes-detail-editor>
    </form>
        
    
    `
})
export class NotesEditorGroupContainer implements OnInit {
    @Input() note = new Note();
    @Output() onSave = new EventEmitter<Note>();
    @Output() remove = new EventEmitter<Note>();

    public noteForm: FormGroup;

    constructor(private sb: NotesSandbox,
                private formBuilder: FormBuilder
                 ) {
        
    }

    ngOnInit() {
        this.noteForm = this.formBuilder.group({
            content: [this.note.content]
        });

    }

    

    onSubmit(): void {
        console.log(this.note);
        console.log(this.noteForm.value);
        this.onSave.emit(Object.assign(this.note, this.noteForm.value));
    }

    public onRemove(note: Note): void {
        this.remove.emit(note);
    }

    
}