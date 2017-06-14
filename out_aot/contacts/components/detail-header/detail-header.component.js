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
import { FormGroup } from "@angular/forms";
import { Contact } from "../../entities/Contact";
export let ContactsDetailHeaderComponent = class ContactsDetailHeaderComponent {
    constructor() {
        this.submitForm = new EventEmitter();
        this.emailLink = "mailto:";
    }
    ngOnInit() {
        console.log('createdat', this.contact.createdAt);
        this.emailLink = `mailto: ${this.contact.primaryEmail}`;
    }
    onSubmit() {
        this.submitForm.emit(null);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', FormGroup)
], ContactsDetailHeaderComponent.prototype, "contactForm", void 0);
__decorate([
    Input(), 
    __metadata('design:type', Contact)
], ContactsDetailHeaderComponent.prototype, "contact", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ContactsDetailHeaderComponent.prototype, "submitForm", void 0);
ContactsDetailHeaderComponent = __decorate([
    Component({
        selector: "contacts-detail-header",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
        <md-toolbar class="context-subheader" color="primary" style="height: 66px !important; 
                                                                            background-color: #fff !important; 
                                                                            margin-bottom: 0px;
                                                                            overflow-y: hidden !important;
                                                                            z-index: 2;
                                                                            position: fixed;
                                                                            top: 0px">
    <div class="initialsBoxHeader">
    <h1>{{contact?.firstName | slice:0:1}}{{contact?.lastName | slice:0:1}}</h1>
    </div>
    <div class="welcomeBlock">
    
    <h3 *ngIf="!contact.firstName">New Contact</h3>
    <h3 *ngIf="contact.firstName">{{contact.firstName}} {{contact.lastName}}</h3>
    <button md-button style="padding: 2px 10px 2px 1px !important" [disabled]="true">
      <p>Assign to Account</p>
    </button>
    </div>

    <div class="actionBlock">
    <button md-button style="position: absolute; right: 20px; top: 15px; padding: 2px 10px 2px 10px !important; display: block" [disabled]="true" type="button">
        <a style="height: 10px; margin-top: -7px; padding: 0px; position: fixed" [href]="emailLink">Email</a>
    </button>
    <button md-button style="position: absolute; right: 20px; top: 35px; padding: 2px 10px 2px 10px !important; display: block" (click)="onSubmit(); false">
      <p>Save changes</p>
      </button>
      </div>
      

  </md-toolbar>
    `
    }), 
    __metadata('design:paramtypes', [])
], ContactsDetailHeaderComponent);
//# sourceMappingURL=detail-header.component.js.map