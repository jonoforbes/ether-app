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
export let AddContactTabComponent = class AddContactTabComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.addContact = new EventEmitter();
        this.id = "";
        this.datePickerConfig = {
            appendTo: document.body,
            showGoToCurrent: true,
            format: "DD-MM-YYYY"
        };
    }
    ngOnInit() {
        var contact = new Contact();
        this.contactTabForm = this.formBuilder.group({
            salutation: [contact.salutation],
            preferredName: [contact.preferredName],
            dateOfBirth: [contact.dateOfBirth],
            firstName: [contact.firstName],
            middleName: [contact.middleName],
            lastName: [contact.lastName],
            gender: [contact.gender],
            maritalStatus: [contact.maritalStatus],
            dateOfDeath: [contact.dateOfDeath],
            nationality: [contact.nationality],
            primaryEmail: [contact.primaryEmail],
            secondaryEmail: [contact.secondaryEmail],
            mobilePhone: [contact.mobilePhone],
            homePhone: [contact.homePhone],
            workPhone: [contact.workPhone]
        });
    }
    onSubmit() {
        console.log(this.contactTabForm.value);
        this.addContact.emit(Object.assign({}, this.contactTabForm.value));
        var contact = new Contact();
        this.contactTabForm = this.formBuilder.group({
            salutation: [contact.salutation],
            preferredName: [contact.preferredName],
            dateOfBirth: [contact.dateOfBirth],
            firstName: [contact.firstName],
            middleName: [contact.middleName],
            lastName: [contact.lastName],
            gender: [contact.gender],
            maritalStatus: [contact.maritalStatus],
            dateOfDeath: [contact.dateOfDeath],
            nationality: [contact.nationality],
            primaryEmail: [contact.primaryEmail],
            secondaryEmail: [contact.secondaryEmail],
            mobilePhone: [contact.mobilePhone],
            homePhone: [contact.homePhone],
            workPhone: [contact.workPhone]
        });
    }
};
__decorate([
    Output(), 
    __metadata('design:type', Object)
], AddContactTabComponent.prototype, "addContact", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], AddContactTabComponent.prototype, "id", void 0);
AddContactTabComponent = __decorate([
    Component({
        selector: "add-contact-tab",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
      <form [formGroup]="contactTabForm" (ngSubmit)="onSubmit()">
      <div fxLayout="row">
        <div class="contactTabContainer" fxLayout="column" fxFlex="630px">
        <div style="height: 15px"></div>
          <div class="contact-form-row" fxLayout="row" fxLayoutAlign="space-between" [formGroup]="contactTabForm">
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Salutation" formControlName="salutation">          
            </md-input-container>
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Preferred Name" formControlName="preferredName">
            </md-input-container>
            <dp-day-picker style="margin-right: 40px" placeholder="Date of Birth" formControlName="dateOfBirth" [config]="datePickerConfig"></dp-day-picker>
                    
            
          </div>

          <div class="contact-form-row" fxLayout="row" fxLayoutAlign="space-between" [formGroup]="contactTabForm">
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="First Name" formControlName="firstName">
            </md-input-container>
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Middle Name" formControlName="middleName">
            </md-input-container>
            <md-input-container style="margin-right: 40px" floatPlaceholder="always">
              <input mdInput placeholder="Last Name" formControlName="lastName">
            </md-input-container>
          </div>

          <div class="contact-form-row" fxLayout="row" fxLayoutAlign="space-between" [formGroup]="contactTabForm">
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Gender" formControlName="gender">
            </md-input-container>
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Marital Status" formControlName="maritalStatus">
            </md-input-container >
            <dp-day-picker style="margin-right: 40px" placeholder="Date of Decease?" formControlName="dateOfDeath" [config]="datePickerConfig"></dp-day-picker>
                   
          </div>
          
          <div class="contact-form-row" fxLayout="row" fxLayoutAlign="space-between" [formGroup]="contactTabForm">
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Nationality" formControlName="nationality">
            </md-input-container>
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Primary Email" formControlName="primaryEmail">
            </md-input-container>
            <md-input-container style="margin-right: 40px" floatPlaceholder="always">
              <input mdInput placeholder="Secondary Email" formControlName="secondaryEmail">
            </md-input-container>
          </div>

          <div class="contact-form-row" fxLayout="row" fxLayoutAlign="space-between" [formGroup]="contactTabForm">
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Mobile Phone" formControlName="mobilePhone">
            </md-input-container>
            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Home Phone" formControlName="homePhone">
            </md-input-container>
            <md-input-container style="margin-right: 40px" floatPlaceholder="always">
              <input mdInput placeholder="Work Phone" formControlName="workPhone">
            </md-input-container>
          </div>
        </div>
        <div fxLayout="column" fxFlex="50px">
          <div style="height: 10px"></div>
          <button md-button class="midColumnButton"><md-icon style="color: #838383; margin-top: -1px">save</md-icon></button>
          
        </div>
        </div>
      </form>
    `
    }), 
    __metadata('design:paramtypes', [FormBuilder])
], AddContactTabComponent);
//# sourceMappingURL=add-contact-tab.component.js.map