var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { Subject } from "rxjs/Subject";
export let ClientDocumentAssignmentSelectorComponent = class ClientDocumentAssignmentSelectorComponent {
    constructor() {
        this.ngUnsubscribe = new Subject();
        this.updateDescription = new EventEmitter();
        this.documentDescriptions = [
            "Passport",
            "Drivers Licence",
            "Birth Certificate",
            "Certificate of Incorporation",
            "Bank Account Details",
            "Contract",
            "Letter"
        ];
    }
    ngOnInit() {
    }
    onUpdateDescription(description) {
        console.log('description emitted through selector', description);
        this.updateDescription.emit(description);
    }
};
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ClientDocumentAssignmentSelectorComponent.prototype, "updateDescription", void 0);
ClientDocumentAssignmentSelectorComponent = __decorate([
    Component({
        selector: "document-assignment-selector",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        
    <button md-menu-item [mdMenuTriggerFor]="statusMenu" type="button">
      <h1>Set Document Role</h1>
    </button>
    <md-menu x-position="before" #statusMenu="mdMenu">
        <button *ngFor="let description of documentDescriptions" (click)="onUpdateDescription(description)" md-menu-item type="button"><h1>{{description}}</h1></button>
    </md-menu>

    
    `
    }), 
    __metadata('design:paramtypes', [])
], ClientDocumentAssignmentSelectorComponent);
//# sourceMappingURL=assignment-selector.component.js.map