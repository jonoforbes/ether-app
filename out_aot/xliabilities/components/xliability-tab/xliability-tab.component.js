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
import { XLiability } from "../../entities/XLiability";
import { FormBuilder } from "@angular/forms";
export let XLiabilityTabComponent = class XLiabilityTabComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.updateXLiability = new EventEmitter();
        this.datePickerConfig = {
            showGoToCurrent: true,
            format: "DD/MM/YYYY"
        };
        this.types = [
            'Property',
            'ISA',
            'Shares',
            'Personal Liability',
            'Other Liability',
            'Cash Account',
            'Cash-based Investment',
            'Insurance Based Investment',
            'Non-insurance Based Investment',
            'National Savings & Investment',
            'Annuity Based Investment'
        ];
        this.assetTypes = [
            'Current Asset',
            'Fixed Asset',
            'Tangible Asset',
            'Intangible Asset'
        ];
        this.taxStatuses = [
            'Gross',
            'Net',
            'Free'
        ];
    }
    ngOnInit() {
        this.xLiabilityTabForm = this.formBuilder.group({
            lenderName: [this.xLiability.lenderName],
            type: [this.xLiability.type],
            initialAmount: [this.xLiability.initialAmount],
            outstandingAmount: [this.xLiability.outstandingAmount],
            paymentAmount: [this.xLiability.paymentAmount],
            paymentFrequency: [this.xLiability.paymentFrequency],
            termRemaining: [this.xLiability.termRemaining],
            repaymentMethod: [this.xLiability.repaymentMethod],
            ratePercentage: [this.xLiability.ratePercentage],
            rateType: [this.xLiability.rateType],
            policyNumber: [this.xLiability.policyNumber],
            transferable: [this.xLiability.transferable],
            startDate: [this.xLiability.startDate],
        });
    }
    onSubmit() {
        this.updateXLiability.emit(Object.assign(this.xLiability, this.xLiabilityTabForm.value));
    }
};
__decorate([
    Input(), 
    __metadata('design:type', XLiability)
], XLiabilityTabComponent.prototype, "xLiability", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], XLiabilityTabComponent.prototype, "updateXLiability", void 0);
XLiabilityTabComponent = __decorate([
    Component({
        selector: "xliability-tab",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
      <div class="contactTabContainer">
      <div style="height: 15px"></div>
            <form [formGroup]="xLiabilityTabForm" (ngSubmit)="onSubmit()">
        <div class="contact-form-row" [formGroup]="xLiabilityTabForm">

          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Type" [mdAutocomplete]="typeSelect" formControlName="type">
           
          </md-input-container>
          <md-autocomplete #typeSelect="mdAutocomplete">
            <md-option style="overflow: hidden !important" *ngFor="let type of types" [value]="type">
                {{ type }}
            </md-option>
          </md-autocomplete>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Name of Lender" formControlName="lenderName">
           
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput type="number" placeholder="Outstanding Amount (£)" formControlName="outstandingAmount">
           
          </md-input-container>
        </div>
        <div class="contact-form-row" [formGroup]="xLiabilityTabForm">

          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Term Remaining" formControlName="termRemaining">
          </md-input-container>
          
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Interest Rate (%)" formControlName="ratePercentage">
          </md-input-container>

          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Initial Amount (£)" formControlName="initialAmount">
           
          </md-input-container>
        </div>
        <div class="contact-form-row" [formGroup]="xLiabilityTabForm">

          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Payment Method" formControlName="repaymentMethod">
           
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Payment Frequency" formControlName="paymentFrequency">
           
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input type="number" mdInput placeholder="Payment Amount (£)" formControlName="paymentAmount">
           
          </md-input-container>

        </div>
        <div class="contact-form-row" [formGroup]="xLiabilityTabForm">

          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Interest Rate Type" formControlName="rateType">       
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Policy Number" formControlName="policyNumber">
          </md-input-container>

        </div>

        <div class="contact-form-row" style="margin-top: -10px" fxLayout="row" [formGroup]="xLiabilityTabForm">
        
            <md-checkbox class="selectionCheckbox" style="margin-left: 20px" formControlName="transferable">
                <span style="margin-left: 10px;">Is the Liability transferable to another property?</span>
            </md-checkbox>
        </div>
        
        <button md-button (click)="onSubmit()"><p>Submit</p></button>




      </form>
      </div>
        
    `
    }), 
    __metadata('design:paramtypes', [FormBuilder])
], XLiabilityTabComponent);
//# sourceMappingURL=xliability-tab.component.js.map