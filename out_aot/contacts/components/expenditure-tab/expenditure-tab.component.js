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
export let ExpenditureTabComponent = class ExpenditureTabComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.updateContact = new EventEmitter();
    }
    ngOnInit() {
        this.expenditureTabForm = this.formBuilder.group({
            monthlyPolicyExpenditure: [this.contact.monthlyPolicyExpenditure],
            monthlyEssentialExpenditure: [this.contact.monthlyEssentialExpenditure],
            monthlyDiscretionaryExpenditure: [this.contact.monthlyDiscretionaryExpenditure],
            emergencyFundsAvailable: [this.contact.emergencyFundsAvailable],
            emergencyFundsRecommended: [this.contact.emergencyFundsRecommended],
            futureCircumstances: [this.contact.futureCircumstances]
        });
    }
    onSubmit() {
        this.updateContact.emit(Object.assign(this.contact, this.expenditureTabForm.value));
    }
};
__decorate([
    Input(), 
    __metadata('design:type', Contact)
], ExpenditureTabComponent.prototype, "contact", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], ExpenditureTabComponent.prototype, "id", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], ExpenditureTabComponent.prototype, "updateContact", void 0);
ExpenditureTabComponent = __decorate([
    Component({
        selector: "expenditure-tab",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
      <form (ngSubmit)="onSubmit()">
      <div fxLayout="row">
        <div fxLayout="column" class="contactTabContainer" style="overflow: hidden !important" fxFlex="570px">
        <div style="height: 10px"></div>
        <div class="income-form-row" fxLayout="row">
            <h3 fxFlex>Monthly Policy Expenditure (£)</h3>
            <md-input-container fxFlex="100px" [formGroup]="expenditureTabForm" floatPlaceholder="always">
              <input mdInput type="number" placeholder="VAT Inclusive" formControlName="monthlyPolicyExpenditure">
            </md-input-container>
        </div>
        <div class="income-form-row" fxLayout="row">
            <h3 fxFlex>Monthly Essential Expenditure (£)</h3>
            <md-input-container fxFlex="100px" [formGroup]="expenditureTabForm" floatPlaceholder="always">
              <input mdInput type="number" placeholder="VAT Inclusive" formControlName="monthlyEssentialExpenditure">
            </md-input-container>
        </div>
        <div class="income-form-row" fxLayout="row">
            <h3 fxFlex>Monthly Discretionary Expenditure (£)</h3>
            <md-input-container fxFlex="100px" [formGroup]="expenditureTabForm" floatPlaceholder="always">
              <input mdInput type="number" placeholder="VAT Inclusive" formControlName="monthlyDiscretionaryExpenditure">
            </md-input-container>
        </div>
          <h2 class="widget-head" style="margin-top: -5px !important"></h2>
        <div class="income-form-row" fxLayout="row" >
            <h3 fxFlex>Emergency Funds (£)</h3>
            <md-input-container fxFlex="100px" [formGroup]="expenditureTabForm" floatPlaceholder="always">
              <input mdInput type="number" placeholder="Available" formControlName="emergencyFundsAvailable">
            </md-input-container>
            <md-input-container fxFlex="100px" [formGroup]="expenditureTabForm" floatPlaceholder="always">
              <input mdInput type="number" placeholder="Recommended" formControlName="emergencyFundsRecommended">
            </md-input-container>
        </div>
        <div class="contact-form-row" [formGroup]="expenditureTabForm">
            <md-checkbox class="selectionCheckbox" style="margin-left: 0px" formControlName="futureCircumstances">
                <span style="margin-left: 10px;">Is the client's future financial circumstance likely to change? (add comments)</span>
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
], ExpenditureTabComponent);
//# sourceMappingURL=expenditure-tab.component.js.map