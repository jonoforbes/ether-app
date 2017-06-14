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
import { Contact } from "../../entities/Contact";
import { FormBuilder } from "@angular/forms";
export let ContactTabComponent = class ContactTabComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.updateContact = new EventEmitter();
        this.updateContactAccount = new EventEmitter();
        this.datePickerConfig = {
            appendTo: document.body,
            showGoToCurrent: true,
            format: "DD-MM-YYYY"
        };
    }
    ngOnInit() {
        this.contactTabForm = this.formBuilder.group({
            salutation: [this.contact.salutation],
            preferredName: [this.contact.preferredName],
            dateOfBirth: [this.contact.dateOfBirth],
            firstName: [this.contact.firstName],
            middleName: [this.contact.middleName],
            lastName: [this.contact.lastName],
            gender: [this.contact.gender],
            maritalStatus: [this.contact.maritalStatus],
            dateOfDeath: [this.contact.dateOfDeath],
            nationality: [this.contact.nationality],
            primaryEmail: [this.contact.primaryEmail],
            secondaryEmail: [this.contact.secondaryEmail],
            mobilePhone: [this.contact.mobilePhone],
            homePhone: [this.contact.homePhone],
            workPhone: [this.contact.workPhone]
        });
    }
    onUpdateContactAccount() {
        this.updateContactAccount.emit(this.contact);
    }
    onSubmit() {
        console.log(this.contact);
        console.log(this.contactTabForm.value);
        this.updateContact.emit(Object.assign(this.contact, this.contactTabForm.value));
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Contact)
], ContactTabComponent.prototype, "contact", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], ContactTabComponent.prototype, "id", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ContactTabComponent.prototype, "updateContact", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ContactTabComponent.prototype, "updateContactAccount", void 0);
ContactTabComponent = __decorate([
    Component({
        selector: "contact-tab",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
      <form [formGroup]="contactTabForm" (ngSubmit)="onSubmit()">
      <div fxLayout="row">
        <div class="contactTabContainer" fxLayout="column" fxFlex="570px">
        <div style="height: 15px"></div>
          <div class="contact-form-row" [formGroup]="contactTabForm">
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Salutation" formControlName="salutation">          
            </md-input-container>
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Preferred Name" formControlName="preferredName">
            </md-input-container>
            <dp-day-picker placeholder="Date of Birth" formControlName="dateOfBirth" [config]="datePickerConfig"></dp-day-picker>
                    
            
          </div>

          <div class="contact-form-row" [formGroup]="contactTabForm">
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="First Name" formControlName="firstName">
            </md-input-container>
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Middle Name" formControlName="middleName">
            </md-input-container>
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Last Name" formControlName="lastName">
            </md-input-container>
          </div>

          <div class="contact-form-row" [formGroup]="contactTabForm">
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Gender" formControlName="gender">
            </md-input-container>
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Marital Status" formControlName="maritalStatus">
            </md-input-container >
            <dp-day-picker placeholder="Date of Decease?" formControlName="dateOfDeath" [config]="datePickerConfig"></dp-day-picker>
                   
          </div>
          
          <div class="contact-form-row" [formGroup]="contactTabForm">
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Nationality" formControlName="nationality">
            </md-input-container>
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Primary Email" formControlName="primaryEmail">
            </md-input-container>
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Secondary Email" formControlName="secondaryEmail">
            </md-input-container>
          </div>

          <div class="contact-form-row" [formGroup]="contactTabForm">
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Mobile Phone" formControlName="mobilePhone">
            </md-input-container>
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Home Phone" formControlName="homePhone">
            </md-input-container>
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Work Phone" formControlName="workPhone">
            </md-input-container>
          </div>
        </div>
        <div fxLayout="column" fxFlex="50px">
          <div style="height: 10px"></div>
          <button md-button class="midColumnButton"><md-icon style="color: #838383; margin-top: -1px">save</md-icon></button>
          <button md-button class="midColumnButton"><md-icon style="color: #838383; margin-top: -1px">chevron_right</md-icon></button>
          <button type="button" (click)="onUpdateContactAccount()" md-button class="midColumnButton"><md-icon style="color: #838383; margin-top: -1px">delete</md-icon></button>
        </div>
        <div fxLayout="column" fxFlex fxLayoutAlign="start end">
        <div style="height: 20px"></div>
          <button md-button type="submit" style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">chevron_right</md-icon><p style="margin: 4px 10px 4px 10px;">Go to Contacts</p>
            </div>
          </button>
          <button md-button type="submit" style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">message</md-icon><p style="margin: 4px 10px 4px 10px;">Comments (0)</p>
            </div>
          </button>

          
        </div>
        </div>
      </form>
    `
    }), 
    __metadata('design:paramtypes', [FormBuilder])
], ContactTabComponent);
//# sourceMappingURL=contact-tab.component.js.map