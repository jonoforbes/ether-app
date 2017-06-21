import { Component, ChangeDetectionStrategy, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { Contact } from "../../entities/Contact";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IDayPickerConfig } from 'ng2-date-picker/dp-day-picker/day-picker-config.model';


@Component({
    selector: "contact-tab",
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
          <button md-button class="midColumnButton"><md-icon style="color: #838383; margin-top: -1px">chevron_right</md-icon></button>
          <button md-button type="button" (click)="onOpenComments()" class="midColumnButton"><md-icon style="color: #838383; margin-top: -1px">message</md-icon></button>
          <button type="button" (click)="onUpdateContactAccount()" md-button class="midColumnButton"><md-icon style="color: #838383; margin-top: -1px">delete</md-icon></button>
        </div>
        </div>
      </form>
    `
})
export class ContactTabComponent implements OnInit {
    @Input() contact: Contact;
    @Input() id: string;
    @Output() updateContact = new EventEmitter<Contact>();
    @Output() updateContactAccount = new EventEmitter<Contact>();
    @Output() openComments = new EventEmitter<{parentId: string, commentType: string}>();


    constructor(private formBuilder: FormBuilder) {

    }
    datePickerConfig: IDayPickerConfig = {
        appendTo: document.body,
        showGoToCurrent: true,
        format: "DD-MM-YYYY"
    }

    contactTabForm: FormGroup;

    ngOnInit(): void {
        this.contactTabForm = this.formBuilder.group({
            _id: [this.contact._id],
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

    onUpdateContactAccount(): void {
      this.updateContactAccount.emit(this.contact);
    }

    onSubmit(): void {
        console.log(this.contact);
        console.log(this.contactTabForm.value);
        this.updateContact.emit(Object.assign(this.contact, this.contactTabForm.value));
    }

    onOpenComments() {
    var commentParams: any = {
      parentId: this.contactTabForm.controls['_id'].value,
      commentType: `${this.contactTabForm.controls['firstName'].value} ${this.contactTabForm.controls['lastName'].value}  - Basic`
    };
    console.log(commentParams);
    this.openComments.emit(Object.assign({}, commentParams));
  }
}