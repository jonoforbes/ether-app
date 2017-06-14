var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
export let NotesDetailEditorComponent = class NotesDetailEditorComponent {
    constructor(router) {
        this.router = router;
        this.remove = new EventEmitter();
        this.options = { charCounterCount: false,
            placeholderText: '',
            toolbarButtons: [
                'bold',
                'italic',
                'underline',
                'fontSize'
            ],
            toolbarButtonsMD: ['bold', 'italic', 'underline', 'fontSize'],
            toolbarButtonsSM: ['bold', 'italic', 'underline', 'fontSize'],
            toolbarButtonsXS: ['bold', 'italic', 'underline', 'fontSize'],
            theme: 'gray'
        };
    }
    onRemove() {
        this.router.navigate(['/notes', { outlets: { 'm': ['list'], 'd': ['add'] } }]);
        this.remove.emit(null);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', FormGroup)
], NotesDetailEditorComponent.prototype, "noteForm", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], NotesDetailEditorComponent.prototype, "remove", void 0);
NotesDetailEditorComponent = __decorate([
    Component({
        selector: "notes-detail-editor",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <div class="note-editor">

        <div fxFill [formGroup]="noteForm">

          <textarea [froalaEditor]='options' formControlName="content"></textarea>

        </div>
        


</div>
    `
    }), 
    __metadata('design:paramtypes', [Router])
], NotesDetailEditorComponent);
//# sourceMappingURL=detail-editor.component.js.map