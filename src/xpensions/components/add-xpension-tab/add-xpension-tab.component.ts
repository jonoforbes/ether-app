import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { XPension } from "../../entities/XPension";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

 @Component({
    selector: "add-xpension-tab",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div class="contactTabContainer">
      <div style="height: 15px"></div>
            <form [formGroup]="xPensionTabForm" (ngSubmit)="onSubmit()">

        <div class="contact-form-row" [formGroup]="xPensionTabForm">
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Pension Type" [mdAutocomplete]="pensionTypeSelect" formControlName="pensionType">    
          </md-input-container>
          <md-autocomplete #pensionTypeSelect="mdAutocomplete">
            <md-option style="overflow: hidden !important" *ngFor="let type of pensionTypes" [value]="type">
                {{ type }}
            </md-option>
          </md-autocomplete>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Provider Name" formControlName="providerName">         
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Status" [mdAutocomplete]="statusSelect" formControlName="status">         
          </md-input-container>
          <md-autocomplete #statusSelect="mdAutocomplete">
            <md-option style="overflow: hidden !important" *ngFor="let status of statuses" [value]="status">
                {{ status }}
            </md-option>
          </md-autocomplete>
        </div>

        <div class="contact-form-row" [formGroup]="xPensionTabForm">
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Plan Type" formControlName="planType">     
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Policy Number" formControlName="policyNumber">           
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Plan Join Date" formControlName="planJoinDate">          
          </md-input-container>
        </div>

        <div class="contact-form-row" [formGroup]="xPensionTabForm">
          <md-input-container floatPlaceholder="always">
            <input mdInput type="number" placeholder="Personal Contribution (£)" formControlName="personalContribution">   
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Contribution Frequency" formControlName="contributionFrequency">    
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput type="number" placeholder="Plan Retirement Age" formControlName="planRetirementAge">
          </md-input-container>
        </div>

        <div class="contact-form-row" *ngIf="this.xPensionTabForm.controls['pensionType'].value == 'Money Purchase'" [formGroup]="xPensionTabForm">
          <md-input-container floatPlaceholder="always">
            <input mdInput type="number" placeholder="Employer Contribution (£)" formControlName="employerContribution">
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput type="number" placeholder="Valuation (£)" formControlName="valuationAmount">
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput type="number" placeholder="Tax Free Current Value (£)" formControlName="taxFreeCurrentValue">
          </md-input-container>
        </div>

        <div class="contact-form-row" *ngIf="this.xPensionTabForm.controls['pensionType'].value == 'Money Purchase'" [formGroup]="xPensionTabForm">
          <md-input-container floatPlaceholder="always">
            <input mdInput [mdAutocomplete]="waiverSelect" placeholder="Waiver of Contributions?" formControlName="waiver">
          </md-input-container>
          <md-autocomplete #waiverSelect="mdAutocomplete">
            <md-option style="overflow: hidden !important" *ngFor="let waiver of waivers" [value]="waiver">
                {{ waiver }}
            </md-option>
          </md-autocomplete>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Life Cover Provided" formControlName="coverLevel">
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput [mdAutocomplete]="lumpSumSelect" placeholder="Lump Sum Death Benefit" formControlName="taxFreeCurrentValue">
          </md-input-container>
          <md-autocomplete #lumpSumSelect="mdAutocomplete">
            <md-option style="overflow: hidden !important" *ngFor="let option of lumpSumOptions" [value]="option">
                {{ option }}
            </md-option>
          </md-autocomplete>
        </div>

        <div class="contact-form-row" *ngIf="this.xPensionTabForm.controls['pensionType'].value == 'Money Purchase'" [formGroup]="xPensionTabForm">
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Plan Start Date" formControlName="planStartDate">
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput type="number" placeholder="Transfer Value (£)" formControlName="transferValue">
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Date Of Transfer" formControlName="transferDate">
          </md-input-container>
        </div>

        <div class="contact-form-row" *ngIf="this.xPensionTabForm.controls['pensionType'].value == 'Money Purchase'" [formGroup]="xPensionTabForm">
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Paid Up Date" formControlName="paidUpDate">
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Protected Rights" formControlName="protectedRights">
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Non-Protected Rights" formControlName="nonProtectedRights">
          </md-input-container>
        </div>

        <div class="contact-form-row" *ngIf="this.xPensionTabForm.controls['pensionType'].value == 'Defined Benefits'" [formGroup]="xPensionTabForm">
          <md-input-container floatPlaceholder="always">
            <input type="number" mdInput placeholder="Transfer Credit (Years)" formControlName="extraYears">
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Company Join Date" formControlName="companyJoinDate">
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Plan Leave Date" formControlName="planLeaveDate">
          </md-input-container>
        </div>

        <div class="contact-form-row" *ngIf="this.xPensionTabForm.controls['pensionType'].value == 'Defined Benefits'" [formGroup]="xPensionTabForm">
          <md-input-container floatPlaceholder="always">
            <input type="number" mdInput placeholder="Pensionable Earnings (£)" formControlName="pensionableEarnings">
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Pension Increase Rate" formControlName="pensionIncreaseRate">
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Death in Service Lump Sum Benefit" formControlName="deathInServiceLumpSum">
          </md-input-container>
        </div>

        <div class="contact-form-row" *ngIf="this.xPensionTabForm.controls['pensionType'].value == 'Defined Benefits'" [formGroup]="xPensionTabForm">
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Spouse Pension" formControlName="spousePension">
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Dependant Pension" formControlName="dependantPension">
          </md-input-container>
        </div>

        <div class="contact-form-row" fxLayout="row" style="margin-top: -10px; margin-bottom: 10px" [formGroup]="xPensionTabForm">
            <md-checkbox class="selectionCheckbox" style="margin-left: 0px" formControlName="contractedOut">
                <span style="margin-left: 10px;">Contracted out?</span>
            </md-checkbox>
            <md-checkbox class="selectionCheckbox" style="margin-left: 20px" formControlName="assetPreservationTrust">
                <span style="margin-left: 10px;">Is existing DIS Benefit in an Asset Preservation Trust?</span>
            </md-checkbox>
        </div>

        
        <button md-button type="button" (click)="onSubmit()"><p>Submit</p></button>




      </form>

      </div>  
    
    
    
    
    ` 
 })
 export class AddXPensionTabComponent implements OnInit {

    @Output() addXPension = new EventEmitter<XPension>();

    constructor(private formBuilder: FormBuilder) {

    }

    pensionTypes: any = [
        'Money Purchase',
        'Defined Benefits'
    ];

    statuses: any = [
        'Deferred',
        'Proposed',
        'Not Proceeded With',
        'Matured',
        'Transferred',
        'In force',
        'Underwriting',
        'Cancelled',
        'Paid Up',
        'Acceptance Issued',
        'In Payment',
        'Not Taken Up',
        'Lapsed',
        'Surrendered',
        'Declined'
    ];

    waivers: any = [
        'Yes',
        'No',
        'Can be Added',
        'N/A',
        'Unknown'
    ];

    lumpSumOptions: any = [
        'Return of Premium',
        'Return of Fund',
        'Premium with Interest',
        'No Return'
    ];
// this.xPensionTabForm.controls.pensionType.value == 'Money Purchase'
// this.xPensionTabForm.controls.pensionType.value == 'Defined Benefits'

    xPensionTabForm: FormGroup;

    ngOnInit(): void {
        var xPension = new XPension();
        this.xPensionTabForm = this.formBuilder.group({
            pensionType: [xPension.pensionType],
            providerName: [xPension.providerName],
            planType: [xPension.planType],
            policyNumber: [xPension.policyNumber],
            planJoinDate: [xPension.planJoinDate],
            status: [xPension.status],
            planRetirementAge: [xPension.planRetirementAge],
            personalContribution: [xPension.personalContribution],
            contributionFrequency: [xPension.contributionFrequency],
            assetPreservationTrust: [xPension.assetPreservationTrust],
            contractedOut: [xPension.contractedOut],
            planStartDate: [xPension.planStartDate],
            planLeaveDate: [xPension.planLeaveDate],
            extraYears: [xPension.extraYears],
            companyJoinDate: [xPension.companyJoinDate],
            valuationAmount: [xPension.valuationAmount],
            taxFreeCurrentValue: [xPension.taxFreeCurrentValue],
            employerContribution: [xPension.employerContribution],
            waiver: [xPension.waiver],
            coverLevel: [xPension.coverLevel],
            lumpSum: [xPension.lumpSum],
            deathInServiceLumpSum: [xPension.deathInServiceLumpSum],
            paidUpDate: [xPension.paidUpDate],
            transferValue: [xPension.transferValue],
            transferDate: [xPension.transferDate],
            protectedRights: [xPension.protectedRights],
            nonProtectedRights: [xPension.nonProtectedRights],
            pensionableEarnings: [xPension.pensionableEarnings],
            pensionIncreaseRate: [xPension.pensionIncreaseRate],
            spousePension: [xPension.spousePension],
            dependantPension: [xPension.dependantPension]  
        });
    }

    onSubmit(): void {
      this.addXPension.emit(Object.assign({}, this.xPensionTabForm.value));
      var xPension = new XPension();
      console.log('saving');
      this.xPensionTabForm = this.formBuilder.group({
            pensionType: [xPension.pensionType],
            providerName: [xPension.providerName],
            planType: [xPension.planType],
            policyNumber: [xPension.policyNumber],
            planJoinDate: [xPension.planJoinDate],
            status: [xPension.status],
            planRetirementAge: [xPension.planRetirementAge],
            personalContribution: [xPension.personalContribution],
            contributionFrequency: [xPension.contributionFrequency],
            assetPreservationTrust: [xPension.assetPreservationTrust],
            contractedOut: [xPension.contractedOut],
            planStartDate: [xPension.planStartDate],
            planLeaveDate: [xPension.planLeaveDate],
            extraYears: [xPension.extraYears],
            companyJoinDate: [xPension.companyJoinDate],
            valuationAmount: [xPension.valuationAmount],
            taxFreeCurrentValue: [xPension.taxFreeCurrentValue],
            employerContribution: [xPension.employerContribution],
            waiver: [xPension.waiver],
            coverLevel: [xPension.coverLevel],
            lumpSum: [xPension.lumpSum],
            deathInServiceLumpSum: [xPension.deathInServiceLumpSum],
            paidUpDate: [xPension.paidUpDate],
            transferValue: [xPension.transferValue],
            transferDate: [xPension.transferDate],
            protectedRights: [xPension.protectedRights],
            nonProtectedRights: [xPension.nonProtectedRights],
            pensionableEarnings: [xPension.pensionableEarnings],
            pensionIncreaseRate: [xPension.pensionIncreaseRate],
            spousePension: [xPension.spousePension],
            dependantPension: [xPension.dependantPension]  
        });
    }

 }