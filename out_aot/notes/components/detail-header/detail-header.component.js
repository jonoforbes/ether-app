var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Note } from "../../entities/Note";
export let NotesDetailHeaderComponent = class NotesDetailHeaderComponent {
    constructor() {
        this.submitForm = new EventEmitter();
    }
    onSubmit() {
        this.submitForm.emit(null);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', FormGroup)
], NotesDetailHeaderComponent.prototype, "noteForm", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Note)
], NotesDetailHeaderComponent.prototype, "note", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NotesDetailHeaderComponent.prototype, "submitForm", void 0);
NotesDetailHeaderComponent = __decorate([
    Component({
        selector: "notes-detail-header",
        template: `
        <md-toolbar class="context-subheader" color="primary" style="height: 66px !important; 
                                                                            background-color: #fff !important; 
                                                                            margin-bottom: 0px;
                                                                            overflow-y: hidden !important;
                                                                            z-index: 2;
                                                                            position: fixed;
                                                                            top: 0px">
                                                                            
    <div class="welcomeBlock">
    <h3 *ngIf="!note.content">New Note</h3>
    <h3 *ngIf="note.content">{{note.content | stripTags | slice:0:35}}</h3>

    </div>

    <div class="actionBlock">
    <button md-button style="position: absolute; right: 20px; top: 15px; padding: 2px 10px 2px 10px !important; display: block" [disabled]="true">
      <p style="color: #c9c9c9">{{note.createdAt | date}}</p>
    </button>
    <button md-button style="position: absolute; right: 20px; top: 35px; padding: 2px 10px 2px 10px !important; display: block" (click)="onSubmit(); false">
      <p>Save changes</p>
      </button>
      </div>
      

  </md-toolbar>
    `
    }), 
    __metadata('design:paramtypes', [])
], NotesDetailHeaderComponent);
//# sourceMappingURL=detail-header.component.js.map