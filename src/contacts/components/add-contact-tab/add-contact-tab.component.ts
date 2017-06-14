import { Component, ChangeDetectionStrategy, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { Contact } from "../../entities/Contact";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IDayPickerConfig } from 'ng2-date-picker/dp-day-picker/day-picker-config.model';


@Component({
    selector: "add-contact-tab",
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
          
        </div>
        <div fxLayout="column" fxFlex fxLayoutAlign="start end">
        <div style="height: 20px"></div>
          <button md-button type="submit" style="text-align: left !important; width: 200px; padding: 5px">
            <div fxLayout="row">
            <md-icon style="color: #838383; margin-top: -1px">message</md-icon><p style="margin: 4px 10px 4px 10px;">Comments (0)</p>
            </div>
          </button>

          
        </div>
        </div>
      </form>
    `
})
export class AddContactTabComponent implements OnInit {
    @Output() addContact = new EventEmitter<Contact>();
    @Input() id: string = "";

    constructor(private formBuilder: FormBuilder) {

    }
    datePickerConfig: IDayPickerConfig = {
        appendTo: document.body,
        showGoToCurrent: true,
        format: "DD-MM-YYYY"
    }

    contactTabForm: FormGroup;

    ngOnInit(): void {
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

    onSubmit(): void {
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
}