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
import { ContactsSandbox } from "../../contacts.sandbox";
import { Subject } from "rxjs/Subject";
export let ContactAssignmentSelectorComponent = class ContactAssignmentSelectorComponent {
    constructor(sb) {
        this.sb = sb;
        this.ngUnsubscribe = new Subject();
        this.updateContact = new EventEmitter();
        this.assignableContacts = new Array();
    }
    ngOnInit() {
        this.sb.contacts$
            .takeUntil(this.ngUnsubscribe)
            .subscribe((contacts) => {
            this.assignableContacts = contacts;
        });
    }
    onUpdateAssignee(contactId) {
        console.log('contact emitted through selector', contactId);
        this.updateContact.emit(contactId);
    }
};
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ContactAssignmentSelectorComponent.prototype, "updateContact", void 0);
ContactAssignmentSelectorComponent = __decorate([
    Component({
        selector: "contact-assignment-selector",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        
    <button md-menu-item [mdMenuTriggerFor]="statusMenu" type="button">
      <h1>Link to Contact</h1>
    </button>
    <md-menu x-position="before" #statusMenu="mdMenu">
        <button *ngFor="let contact of assignableContacts" md-menu-item (click)="onUpdateAssignee(contact._id)" type="button"><h1>{{contact.firstName}} {{contact.lastName}}</h1></button>
        <button md-menu-item ><h1>Go to Contacts</h1></button>
    </md-menu>

    
    `
    }), 
    __metadata('design:paramtypes', [ContactsSandbox])
], ContactAssignmentSelectorComponent);
//# sourceMappingURL=assignment-selector.component.js.map