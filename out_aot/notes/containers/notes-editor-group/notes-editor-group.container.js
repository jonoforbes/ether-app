var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";
import { Note } from "../../entities/Note";
import { FormBuilder } from "@angular/forms";
import { NotesSandbox } from "../../notes.sandbox";
export let NotesEditorGroupContainer = class NotesEditorGroupContainer {
    constructor(sb, formBuilder) {
        this.sb = sb;
        this.formBuilder = formBuilder;
        this.note = new Note();
        this.onSave = new EventEmitter();
        this.remove = new EventEmitter();
    }
    ngOnInit() {
        this.noteForm = this.formBuilder.group({
            content: [this.note.content]
        });
    }
    onSubmit() {
        console.log(this.note);
        console.log(this.noteForm.value);
        this.onSave.emit(Object.assign(this.note, this.noteForm.value));
    }
    onRemove(note) {
        this.remove.emit(note);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Object)
], NotesEditorGroupContainer.prototype, "note", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NotesEditorGroupContainer.prototype, "onSave", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NotesEditorGroupContainer.prototype, "remove", void 0);
NotesEditorGroupContainer = __decorate([
    Component({
        selector: "notes-editor-group",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    
        
        <form [formGroup]="noteForm" novalidate (ngSubmit)="onSubmit()">

        <notes-detail-header [noteForm]="this.noteForm" [note]="this.note" (submitForm)="onSubmit()"></notes-detail-header>
   
        


        <notes-detail-editor [noteForm]="this.noteForm" (remove)="onRemove(note)"></notes-detail-editor>
    </form>
        
    
    `
    }), 
    __metadata('design:paramtypes', [NotesSandbox, FormBuilder])
], NotesEditorGroupContainer);
//# sourceMappingURL=notes-editor-group.container.js.map