import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";
import { Contact } from "../../entities/Contact";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: "contacts-detail-form",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="contact-form">

        <div class="contact-form-row" [formGroup]="contactForm">

          <md-input-container>
            <input mdInput placeholder="Salutation" formControlName="salutation">
           
          </md-input-container>

          <md-input-container>
            <input mdInput placeholder="Preferred Name" formControlName="preferredName">
           
          </md-input-container>

          <md-input-container>
            <input mdInput placeholder="Date of Birth" type="date" formControlName="dateOfBirth"> 
          </md-input-container>

        </div>

        <div class="contact-form-row" [formGroup]="contactForm">

          <md-input-container>
            <input mdInput placeholder="First Name" formControlName="firstName">
          </md-input-container>

          <md-input-container>
            <input mdInput placeholder="Middle Name" formControlName="middleName">
          </md-input-container>

          <md-input-container>
            <input mdInput placeholder="Last Name" formControlName="lastName">
          </md-input-container>

        </div>
<div class="contact-form-row" [formGroup]="contactForm">
<md-input-container>
  <input mdInput placeholder="Nationality" formControlName="nationality">
</md-input-container>
<md-input-container>
  <input mdInput placeholder="Primary Email" formControlName="primaryEmail">
</md-input-container>
<md-input-container>
  <input mdInput placeholder="Secondary Email" formControlName="secondaryEmail">
</md-input-container>
</div>
<div class="contact-form-row" [formGroup]="contactForm">
<md-input-container>
  <input mdInput placeholder="Mobile Phone" formControlName="mobilePhone">
</md-input-container>
<md-input-container>
  <input mdInput placeholder="Home Phone" formControlName="homePhone">
</md-input-container>
<md-input-container>
  <input mdInput placeholder="Work Phone" formControlName="workPhone">
</md-input-container>
</div>

</div>
    `
})
export class ContactsDetailFormComponent {
  @Input() contactForm: FormGroup;
  @Output() remove = new EventEmitter();

  constructor( private router: Router ) {

  }

  onRemove(): void {
    this.router.navigate(['/contacts', {outlets: {'m': ['list'], 'd': ['add']}}]);
    this.remove.emit(null);
  }

}

// <button class="btn btn-lg btn-danger" (click)="onRemove(); false"><i class="fa fa-trash-o"></i></button>