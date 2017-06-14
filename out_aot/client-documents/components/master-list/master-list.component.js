var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
export let ClientDocumentsMasterListComponent = class ClientDocumentsMasterListComponent {
    constructor(router) {
        this.router = router;
        this.fullTitle = false;
        this.updateContact = new EventEmitter();
        this.updateClientAccount = new EventEmitter();
        this.updateDescription = new EventEmitter();
    }
    onUpdateContact(clientDocument, contactId) {
        console.log('contact emitted through list', contactId);
        this.updateContact.emit({ clientDocument, contactId });
    }
    onUpdateClientAccount(clientDocument, accountId) {
        this.updateClientAccount.emit({ clientDocument, accountId });
    }
    onUpdateDescription(clientDocument, description) {
        this.updateDescription.emit({ clientDocument, description });
    }
    selectDetail(clientDocument) {
        this.router.navigate(['/documents', { outlets: { 'm': ['list'], 'd': [clientDocument._id] } }]);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Boolean)
], ClientDocumentsMasterListComponent.prototype, "fullTitle", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Array)
], ClientDocumentsMasterListComponent.prototype, "clientDocuments", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ClientDocumentsMasterListComponent.prototype, "updateContact", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ClientDocumentsMasterListComponent.prototype, "updateClientAccount", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ClientDocumentsMasterListComponent.prototype, "updateDescription", void 0);
ClientDocumentsMasterListComponent = __decorate([
    Component({
        selector: "client-documents-master-list",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <md-nav-list>
        <div fxLayout="row" *ngFor="let clientDocument of clientDocuments">
        <button fxLayoutAlign="start" md-button (click)="selectDetail(clientDocument)">
            <md-icon>insert_drive_file</md-icon>
            <div fxLayout="column">
            <h3 *ngIf="fullTitle" style="margin-top: 17px" md-line>{{clientDocument.name}}</h3>
            
            <h3 *ngIf="!fullTitle" style="margin-top: 17px" md-line>{{clientDocument.name | slice:0:25}}</h3>
            <p style="margin-top: 17px; left: 60px;">{{clientDocument.description}}</p>
            </div>
          
          </button>
          <client-document-menu
            (updateContact)="onUpdateContact(clientDocument, $event)"
            (updateClientAccount)="onUpdateClientAccount(clientDocument, $event)"
            (updateDescription)="onUpdateDescription(clientDocument, $event)"
          ></client-document-menu>

          </div>
      </md-nav-list>
    `
    }), 
    __metadata('design:paramtypes', [Router])
], ClientDocumentsMasterListComponent);
//# sourceMappingURL=master-list.component.js.map