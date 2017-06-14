var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
export let ContactsDetailFormComponent = class ContactsDetailFormComponent {
    constructor(router) {
        this.router = router;
        this.remove = new EventEmitter();
    }
    onRemove() {
        this.router.navigate(['/contacts', { outlets: { 'm': ['list'], 'd': ['add'] } }]);
        this.remove.emit(null);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', FormGroup)
], ContactsDetailFormComponent.prototype, "contactForm", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ContactsDetailFormComponent.prototype, "remove", void 0);
ContactsDetailFormComponent = __decorate([
    Component({
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
    }), 
    __metadata('design:paramtypes', [Router])
], ContactsDetailFormComponent);
//# sourceMappingURL=detail-form.component.js.map