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
export let ClientDocumentMenuComponent = class ClientDocumentMenuComponent {
    constructor() {
        this.updateContact = new EventEmitter();
        this.updateClientAccount = new EventEmitter();
        this.updateSale = new EventEmitter();
        this.updateDescription = new EventEmitter();
    }
    onUpdateContact(contactId) {
        console.log('contact emitted through menu', contactId);
        this.updateContact.emit(contactId);
    }
    onUpdateClientAccount(accountId) {
        this.updateClientAccount.emit(accountId);
    }
    onUpdateSale(saleId) {
        this.updateSale.emit(saleId);
    }
    onUpdateDescription(description) {
        this.updateDescription.emit(description);
    }
};
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ClientDocumentMenuComponent.prototype, "updateContact", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ClientDocumentMenuComponent.prototype, "updateClientAccount", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ClientDocumentMenuComponent.prototype, "updateSale", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ClientDocumentMenuComponent.prototype, "updateDescription", void 0);
ClientDocumentMenuComponent = __decorate([
    Component({
        selector: "client-document-menu",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <button 
            md-button 
            [mdMenuTriggerFor]="taskMenu" 
            type="button">
            <md-icon style="color: #838383; width: 20px;">more_vert</md-icon>
            
        </button>
        
        <md-menu x-position="before" #taskMenu="mdMenu">
            <contact-assignment-selector (updateContact)="onUpdateContact($event)"></contact-assignment-selector>
            <account-assignment-selector [fullTitle]="true" (updateClientAccount)="onUpdateClientAccount($event)"></account-assignment-selector>
            <document-assignment-selector (updateDescription)="onUpdateDescription($event)"></document-assignment-selector>
        </md-menu>
    
    
    
    
    `
    }), 
    __metadata('design:paramtypes', [])
], ClientDocumentMenuComponent);
//# sourceMappingURL=client-document-menu.component.js.map