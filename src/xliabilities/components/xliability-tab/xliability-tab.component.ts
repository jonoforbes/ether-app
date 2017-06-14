import { Component, ChangeDetectionStrategy, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { XLiability } from "../../entities/XLiability";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IDayPickerConfig } from 'ng2-date-picker/dp-day-picker/day-picker-config.model';


@Component({
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
})
export class XLiabilityTabComponent implements OnInit {
    @Input() xLiability: XLiability;
    @Output() updateXLiability = new EventEmitter<XLiability>();

    constructor(private formBuilder: FormBuilder) {

    }

    datePickerConfig: IDayPickerConfig = {
        showGoToCurrent: true,
        format: "DD/MM/YYYY"
    };

    types = [
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

    assetTypes = [
      'Current Asset',
      'Fixed Asset',
      'Tangible Asset',
      'Intangible Asset'
    ];

    taxStatuses = [
      'Gross',
      'Net',
      'Free'
    ]

    xLiabilityTabForm: FormGroup;

    ngOnInit(): void {
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

    onSubmit(): void {
      this.updateXLiability.emit(Object.assign(this.xLiability, this.xLiabilityTabForm.value));
    }
}