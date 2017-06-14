var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { XPension } from "../../entities/XPension";
import { FormBuilder } from "@angular/forms";
export let XPensionTabComponent = class XPensionTabComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.updateXPension = new EventEmitter();
        this.pensionTypes = [
            'Money Purchase',
            'Defined Benefits'
        ];
        this.statuses = [
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
        this.waivers = [
            'Yes',
            'No',
            'Can be Added',
            'N/A',
            'Unknown'
        ];
        this.lumpSumOptions = [
            'Return of Premium',
            'Return of Fund',
            'Premium with Interest',
            'No Return'
        ];
    }
    ngOnInit() {
        this.xPensionTabForm = this.formBuilder.group({
            pensionType: [this.xPension.pensionType],
            providerName: [this.xPension.providerName],
            planType: [this.xPension.planType],
            policyNumber: [this.xPension.policyNumber],
            planJoinDate: [this.xPension.planJoinDate],
            status: [this.xPension.status],
            planRetirementAge: [this.xPension.planRetirementAge],
            personalContribution: [this.xPension.personalContribution],
            contributionFrequency: [this.xPension.contributionFrequency],
            assetPreservationTrust: [this.xPension.assetPreservationTrust],
            contractedOut: [this.xPension.contractedOut],
            planStartDate: [this.xPension.planStartDate],
            planLeaveDate: [this.xPension.planLeaveDate],
            extraYears: [this.xPension.extraYears],
            companyJoinDate: [this.xPension.companyJoinDate],
            valuationAmount: [this.xPension.valuationAmount],
            taxFreeCurrentValue: [this.xPension.taxFreeCurrentValue],
            employerContribution: [this.xPension.employerContribution],
            waiver: [this.xPension.waiver],
            coverLevel: [this.xPension.coverLevel],
            lumpSum: [this.xPension.lumpSum],
            deathInServiceLumpSum: [this.xPension.deathInServiceLumpSum],
            paidUpDate: [this.xPension.paidUpDate],
            transferValue: [this.xPension.transferValue],
            transferDate: [this.xPension.transferDate],
            protectedRights: [this.xPension.protectedRights],
            nonProtectedRights: [this.xPension.nonProtectedRights],
            pensionableEarnings: [this.xPension.pensionableEarnings],
            pensionIncreaseRate: [this.xPension.pensionIncreaseRate],
            spousePension: [this.xPension.spousePension],
            dependantPension: [this.xPension.dependantPension]
        });
    }
    onSubmit() {
        this.updateXPension.emit(Object.assign(this.xPension, this.xPensionTabForm.value));
    }
};
__decorate([
    Input(), 
    __metadata('design:type', XPension)
], XPensionTabComponent.prototype, "xPension", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], XPensionTabComponent.prototype, "updateXPension", void 0);
XPensionTabComponent = __decorate([
    Component({
        selector: "xpension-tab",
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
    }), 
    __metadata('design:paramtypes', [FormBuilder])
], XPensionTabComponent);
//# sourceMappingURL=xpension-tab.component.js.map