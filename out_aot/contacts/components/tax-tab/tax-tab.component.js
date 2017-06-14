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
export let TaxTabComponent = class TaxTabComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.updateContact = new EventEmitter();
        this.datePickerConfig = {
            appendTo: document.body,
            showGoToCurrent: true,
            format: "DD-MM-YYYY"
        };
    }
    ngOnInit() {
        this.taxTabForm = this.formBuilder.group({
            taxRate: [this.contact.taxRate],
            taxResident: [this.contact.taxResident],
            taxDomicile: [this.contact.taxDomicile],
            taxResidenceDate: [this.contact.taxResidenceDate],
            taxNI: [this.contact.taxNI],
            taxWillChange: [this.contact.taxWillChange]
        });
    }
    onSubmit() {
        this.updateContact.emit(Object.assign(this.contact, this.taxTabForm.value));
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Contact)
], TaxTabComponent.prototype, "contact", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], TaxTabComponent.prototype, "id", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], TaxTabComponent.prototype, "updateContact", void 0);
TaxTabComponent = __decorate([
    Component({
        selector: "tax-tab",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
      <form (ngSubmit)="onSubmit()">
      <div fxLayout="row">
        <div fxLayout="column" class="contactTabContainer" style="overflow-y: hidden !important" fxFlex="570px">
        <div style="height: 15px"></div>
        <div class="contact-form-row" fxLayout="row">
            <md-input-container fxFlex="50" [formGroup]="taxTabForm" floatPlaceholder="always">
              <input mdInput type="number" placeholder="Tax Rate (%)" formControlName="taxRate">
            </md-input-container>
            <md-input-container fxFlex="47" [formGroup]="taxTabForm" floatPlaceholder="always">
              <input mdInput type="number" placeholder="National Insurance Number" formControlName="taxNI">
            </md-input-container>
        </div>
        <div class="contact-form-row" [formGroup]="taxTabForm" fxLayout="row" fxLayoutAlign="start center">
            <md-checkbox fxFlex class="selectionCheckbox" style="margin-left: 0px" formControlName="taxResident">
                <span style="margin-left: 10px;">Is the client a UK Resident for tax purposes?</span>
            </md-checkbox>
            <dp-day-picker fxFlex="150px" placeholder="Residence Date" formControlName="taxResidenceDate" [config]="datePickerConfig"></dp-day-picker>
          </div>
        <div class="contact-form-row" [formGroup]="taxTabForm">
            <md-checkbox class="selectionCheckbox" style="margin-left: 0px" formControlName="taxDomicile">
                <span style="margin-left: 10px;">Is the client domiciled in the UK for tax purposes?</span>
            </md-checkbox>
          </div>
        <div class="contact-form-row" [formGroup]="taxTabForm">
            <md-checkbox class="selectionCheckbox" style="margin-left: 0px" formControlName="taxWillChange">
                <span style="margin-left: 10px;">Are the client's tax circumstances likely to change? (add comments)</span>
            </md-checkbox>
          </div>



          <div style="height: 10px"></div>
        </div>
        <div fxLayout="column" fxFlex="30px"></div>
        <div fxLayout="column" fxFlex fxLayoutAlign="start end">

        <div style="height: 15px"></div>
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
], TaxTabComponent);
//# sourceMappingURL=tax-tab.component.js.map