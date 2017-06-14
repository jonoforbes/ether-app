var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { NotesSandbox } from "../../notes.sandbox";
export let AddNoteContainer = class AddNoteContainer {
    constructor(sb) {
        this.sb = sb;
    }
    onSave(note) {
        this.sb.addNote(note);
    }
};
AddNoteContainer = __decorate([
    Component({
        selector: "add-note",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <div class="example-scrolling-content">
        


        <notes-editor-group (onSave)="onSave($event)"></notes-editor-group>

        
    </div>
    `
    }), 
    __metadata('design:paramtypes', [NotesSandbox])
], AddNoteContainer);
//# sourceMappingURL=add-note.container.js.map