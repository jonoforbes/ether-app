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
export let HealthOccupationTabComponent = class HealthOccupationTabComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.updateContact = new EventEmitter();
    }
    ngOnInit() {
        this.healthOccupationTabForm = this.formBuilder.group({
            smoker: [this.contact.smoker],
            goodHealth: [this.contact.goodHealth],
            medicalConditions: [this.contact.medicalConditions],
            occupation: [this.contact.occupation],
            occupationTitle: [this.contact.occupationTitle],
            employerName: [this.contact.employerName]
        });
    }
    onSubmit() {
        console.log(this.contact);
        console.log(this.healthOccupationTabForm.value);
        this.updateContact.emit(Object.assign(this.contact, this.healthOccupationTabForm.value));
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Contact)
], HealthOccupationTabComponent.prototype, "contact", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], HealthOccupationTabComponent.prototype, "id", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], HealthOccupationTabComponent.prototype, "updateContact", void 0);
HealthOccupationTabComponent = __decorate([
    Component({
        selector: "health-occupation-tab",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
      <form [formGroup]="healthOccupationTabForm" (ngSubmit)="onSubmit()">
      <div fxLayout="row">
        <div class="contactTabContainer" fxLayout="column" style="overflow-y: hidden !important" fxFlex="570px">
        <div style="height: 15px"></div>

          <div class="contact-form-row" [formGroup]="healthOccupationTabForm">

            <md-input-container floatPlaceholder="always">
              <input mdInput placeholder="Occupation" formControlName="occupation">
            </md-input-container>
            <md-input-container floatPlaceholder="always" >
              <input mdInput placeholder="Job Title" formControlName="occupationTitle">
            </md-input-container>
            <md-input-container  floatPlaceholder="always">
              <input mdInput placeholder="Employer Name" formControlName="employerName">
            </md-input-container>
          </div>

          <div class="contact-form-row" fxLayout="row" [formGroup]="healthOccupationTabForm">
            <md-checkbox class="selectionCheckbox" style="margin-left: 0px; margin-right: 20px" formControlName="smoker">
                <span style="margin-left: 10px;">Is the client a smoker?</span>
            </md-checkbox>
            <md-checkbox class="selectionCheckbox" style="margin-left: 15px; margin-right: 0px" formControlName="goodHealth">
                <span style="margin-left: 10px;">Is the client in good health?</span>
            </md-checkbox>
          </div>

          <div class="contact-form-row" [formGroup]="healthOccupationTabForm">
            <md-checkbox class="selectionCheckbox" style="margin-left: 0px; margin-right: 40px" formControlName="medicalConditions">
                <span style="margin-left: 10px;">Does the client have pre-existing medical conditions (please add comments)</span>
            </md-checkbox>
          </div>
          <div style="height: 15px"></div>
        
          
          
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
            <md-icon style="color: #838383; margin-top: -1px">save</md-icon><p style="margin: 4px 10px 4px 10px;">Save changes</p>
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
], HealthOccupationTabComponent);
//# sourceMappingURL=health-occupation-tab.component.js.map