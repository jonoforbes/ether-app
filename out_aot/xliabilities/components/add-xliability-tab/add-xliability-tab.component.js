var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";
import { XLiability } from "../../entities/XLiability";
import { FormBuilder } from "@angular/forms";
export let AddXLiabilityTabComponent = class AddXLiabilityTabComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.addXLiability = new EventEmitter();
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
        this.liabilityTypes = [
            'Current Liability',
            'Fixed Liability',
            'Tangible Liability',
            'Intangible Liability'
        ];
        this.taxStatuses = [
            'Gross',
            'Net',
            'Free'
        ];
    }
    ngOnInit() {
        var xLiability = new XLiability();
        this.xLiabilityTabForm = this.formBuilder.group({
            lenderName: [xLiability.lenderName],
            type: [xLiability.type],
            initialAmount: [xLiability.initialAmount],
            outstandingAmount: [xLiability.outstandingAmount],
            paymentAmount: [xLiability.paymentAmount],
            paymentFrequency: [xLiability.paymentFrequency],
            termRemaining: [xLiability.termRemaining],
            repaymentMethod: [xLiability.repaymentMethod],
            ratePercentage: [xLiability.ratePercentage],
            rateType: [xLiability.rateType],
            policyNumber: [xLiability.policyNumber],
            transferable: [xLiability.transferable],
            startDate: [xLiability.startDate],
        });
    }
    onSubmit() {
        this.addXLiability.emit(Object.assign({}, this.xLiabilityTabForm.value));
        var xLiability = new XLiability();
        console.log('saving');
        this.xLiabilityTabForm = this.formBuilder.group({
            lenderName: [xLiability.lenderName],
            type: [xLiability.type],
            initialAmount: [xLiability.initialAmount],
            outstandingAmount: [xLiability.outstandingAmount],
            paymentAmount: [xLiability.paymentAmount],
            paymentFrequency: [xLiability.paymentFrequency],
            termRemaining: [xLiability.termRemaining],
            repaymentMethod: [xLiability.repaymentMethod],
            ratePercentage: [xLiability.ratePercentage],
            rateType: [xLiability.rateType],
            policyNumber: [xLiability.policyNumber],
            transferable: [xLiability.transferable],
            startDate: [xLiability.startDate],
        });
    }
};
__decorate([
    Output(), 
    __metadata('design:type', Object)
], AddXLiabilityTabComponent.prototype, "addXLiability", void 0);
AddXLiabilityTabComponent = __decorate([
    Component({
        selector: "add-xliability-tab",
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
        
            <md-checkbox class="selectionCheckbox" style="margin-left: 0px" formControlName="transferable">
                <span style="margin-left: 10px;">Is the Liability transferable to another property?</span>
            </md-checkbox>
        </div>
        
        <button md-button (click)="onSubmit()"><p>Submit</p></button>




      </form>

    </div>    
    `
    }), 
    __metadata('design:paramtypes', [FormBuilder])
], AddXLiabilityTabComponent);
//# sourceMappingURL=add-xliability-tab.component.js.map