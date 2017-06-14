var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
export let ContactsMasterListComponent = class ContactsMasterListComponent {
    constructor(router) {
        this.router = router;
        this.updateClientAccount = new EventEmitter();
        this.order = 'lastName';
    }
    addContact() {
        this.router.navigate(['/contacts', { outlets: { 'm': ['list'], 'd': ['add'] } }]);
    }
    onUpdateClientAccount(contact, accountId) {
        this.updateClientAccount.emit({ contact, accountId });
    }
    selectDetail(contact) {
        this.router.navigate(['/contacts', { outlets: { 'm': ['list'], 'd': [contact._id] } }]);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Array)
], ContactsMasterListComponent.prototype, "contacts", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ContactsMasterListComponent.prototype, "updateClientAccount", void 0);
ContactsMasterListComponent = __decorate([
    Component({
        selector: "contacts-master-list",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <button md-button (click)="addContact()" style="text-align: left !important; padding: 5px; margin-top: -10px;">
          <p style="margin: 4px 170px 4px 10px;">+ &nbsp; &nbsp;Add New Contact</p>
        </button>
        <md-nav-list>
        <div fxLayout="row" *ngFor="let contact of contacts | orderByPipe: order">
        <button md-button style="align-items: true" (click)="selectDetail(contact)">
          
            <div fxLayout="column" class="initialsBoxContact">
        <h1>{{contact.firstName | slice:0:1}}{{contact.lastName | slice:0:1}}</h1>
        </div>
            <h3 style="margin-top: 17px" md-line>{{contact.firstName}} {{contact.lastName}}</h3>
            
          
          </button>
          <contact-menu
            (updateClientAccount)="onUpdateClientAccount(contact, $event)"
          ></contact-menu>
        </div>

      </md-nav-list>
    `
    }), 
    __metadata('design:paramtypes', [Router])
], ContactsMasterListComponent);
//# sourceMappingURL=master-list.component.js.map