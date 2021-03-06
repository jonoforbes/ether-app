import { Component, ChangeDetectionStrategy, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { XProtection } from "../../entities/XProtection";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IDayPickerConfig } from 'ng2-date-picker/dp-day-picker/day-picker-config.model';


@Component({
    selector: "xprotection-tab",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
      <div class="contactTabContainer">
      <div style="height: 15px"></div>
            <form [formGroup]="xProtectionTabForm" (ngSubmit)="onSubmit()">
        <div class="contact-form-row" [formGroup]="xProtectionTabForm">

          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Plan Type" [mdAutocomplete]="planSelect" formControlName="planType">
           
          </md-input-container>
          <md-autocomplete #planSelect="mdAutocomplete">
            <md-option style="overflow: hidden !important" *ngFor="let plan of planTypes" [value]="plan">
                {{ plan }}
            </md-option>
          </md-autocomplete>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Insurer Name" formControlName="insurerName">
           
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput type="number" placeholder="Valuation" formControlName="policyNumber">
           
          </md-input-container>
        </div>
        <div class="contact-form-row" [formGroup]="xProtectionTabForm">

          <md-input-container floatPlaceholder="always">
            <input type="number" mdInput placeholder="Sum Assured - Life (£)" formControlName="lifeSum">
           
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input type="number" mdInput placeholder="Sum Assured - Critical Illness (£)" formControlName="ciSum">
           
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input type="number" mdInput placeholder="Sum Assured - After CI (£)" formControlName="afterCISum">
           
          </md-input-container>
        </div>
        <div class="contact-form-row" [formGroup]="xProtectionTabForm">

          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Benefit Duration" [mdAutocomplete]="benefitDurationSelect" formControlName="benefitDuration">
           
          </md-input-container>
          <md-autocomplete #benefitDurationSelect="mdAutocomplete">
            <md-option style="overflow: hidden !important" *ngFor="let duration of benefitDurations" [value]="duration">
                {{ duration }}
            </md-option>
          </md-autocomplete>
          <md-input-container floatPlaceholder="always">
            <input type="number" mdInput placeholder="Benefit Amount (£)" formControlName="benefitAmount">
           
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input type="number" mdInput placeholder="Benefit Rate (%)" formControlName="benefitRate">
           
          </md-input-container>

        </div>
        <div class="contact-form-row" [formGroup]="xProtectionTabForm">

          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Deferred Period" [mdAutocomplete]="benefitDurationSelect" formControlName="deferredPeriod">       
          </md-input-container>


          <md-input-container floatPlaceholder="always">
            <input type="number" mdInput placeholder="Contribution Amount (£)" formControlName="contributionAmount">
          </md-input-container>

          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Contribution Frequency" formControlName="contributionFrequency">       
          </md-input-container>

        </div>

        <div class="contact-form-row" fxLayout="row" [formGroup]="xProtectionTabForm">
            <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Policy Number" formControlName="policyNumber">       
          </md-input-container>
            <md-checkbox class="selectionCheckbox" style="margin-left: 0px" formControlName="assignedPolicy">
                <span style="margin-left: 10px;">Assigned Policy</span>
            </md-checkbox>
            <md-checkbox class="selectionCheckbox" style="margin-left: 45px" formControlName="lapr">
                <span style="margin-left: 10px;">Attracts LAPR</span>
            </md-checkbox>
        </div>
        <div class="contact-form-row" style="margin-top: -5px" fxLayout="row" [formGroup]="xProtectionTabForm">
            <md-checkbox class="selectionCheckbox" style="margin-left: 0px" formControlName="waiver">
                <span style="margin-left: 10px;">Waiver of Premium</span>
            </md-checkbox>
            <md-checkbox class="selectionCheckbox" style="margin-left: 19px" formControlName="rateGuarantee">
                <span style="margin-left: 10px;">Rate Guaranteed</span>
            </md-checkbox>
            <md-checkbox class="selectionCheckbox" style="margin-left: 35px" formControlName="inTrust">
                <span style="margin-left: 10px;">In Trust</span>
            </md-checkbox>
        </div>
        <div class="contact-form-row" fxLayout="row" [formGroup]="xProtectionTabForm">

          <md-input-container floatPlaceholder="always">
            <input mdInput type="number" placeholder="Maturity Value" formControlName="maturityValue">       
          </md-input-container>

        </div>
        <button md-button (click)="onSubmit()"><p>Submit</p></button>




      </form>

      </div>  
    `
})
export class XProtectionTabComponent implements OnInit {
    @Input() xProtection: XProtection;
    @Output() updateXProtection = new EventEmitter<XProtection>();

    constructor(private formBuilder: FormBuilder) {

    }

    datePickerConfig: IDayPickerConfig = {
        showGoToCurrent: true,
        format: "DD/MM/YYYY"
    };

    planTypes = [
      'Property',
      'ISA',
      'Shares',
      'Personal Protection',
      'Other Protection',
      'Cash Account',
      'Cash-based Investment',
      'Insurance Based Investment',
      'Non-insurance Based Investment',
      'National Savings & Investment',
      'Annuity Based Investment'
    ];

    benefitDurations = [
        '1 Month',
        '2 Months',
        '3 Months'
    ]

    protectionTypes = [
      'Current Protection',
      'Fixed Protection',
      'Tangible Protection',
      'Intangible Protection'
    ];

    taxStatuses = [
      'Gross',
      'Net',
      'Free'
    ]

    xProtectionTabForm: FormGroup;

    ngOnInit(): void {
        this.xProtectionTabForm = this.formBuilder.group({
            planType: [this.xProtection.planType],               
            insurerName: [this.xProtection.insurerName],
            lifeSum: [this.xProtection.lifeSum],
            ciSum: [this.xProtection.ciSum],
            afterCISum: [this.xProtection.afterCISum],
            deferredPeriod: [this.xProtection.deferredPeriod],         // Deferred Period in Months
            benefitDuration: [this.xProtection.benefitDuration],        // Duration in Months
            benefitAmount: [this.xProtection.benefitAmount],
            benefitRate: [this.xProtection.benefitRate],            // Percentage
            policyNumber: [this.xProtection.policyNumber],
            contributionAmount: [this.xProtection.contributionAmount],
            contributionFrequency: [this.xProtection.contributionFrequency],
            waiver: [this.xProtection.waiver],
            rateGuarantee: [this.xProtection.rateGuarantee],
            inTrust: [this.xProtection.inTrust],
            assignedPolicy: [this.xProtection.assignedPolicy],
            lapr: [this.xProtection.lapr],
            maturityValue: [this.xProtection.maturityValue],
            valuation: [this.xProtection.valuation],
            commencementDate: [this.xProtection.commencementDate],
            maturityDate: [this.xProtection.maturityDate],
        });
    }

    onSubmit(): void {
      this.updateXProtection.emit(Object.assign(this.xProtection, this.xProtectionTabForm.value));
    }
}