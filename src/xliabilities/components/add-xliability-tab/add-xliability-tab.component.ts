import { Component, ChangeDetectionStrategy, Input, Output, OnInit, EventEmitter, HostListener } from "@angular/core";
import { XLiability } from "../../entities/XLiability";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
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
})
export class AddXLiabilityTabComponent implements OnInit {

    @Output() addXLiability = new EventEmitter<XLiability>();

    constructor(private formBuilder: FormBuilder) {

    }

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

    liabilityTypes = [
      'Current Liability',
      'Fixed Liability',
      'Tangible Liability',
      'Intangible Liability'
    ];

    taxStatuses = [
      'Gross',
      'Net',
      'Free'
    ]

    xLiabilityTabForm: FormGroup;


    ngOnInit(): void {
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

    onSubmit(): void {
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
      })
    }

}