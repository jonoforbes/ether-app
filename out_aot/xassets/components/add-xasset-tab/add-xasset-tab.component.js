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
import { XAsset } from "../../entities/XAsset";
import { FormBuilder } from "@angular/forms";
export let AddXAssetTabComponent = class AddXAssetTabComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.addXAsset = new EventEmitter();
        this.categories = [
            'Property',
            'ISA',
            'Shares',
            'Personal Asset',
            'Other Asset',
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
        var xAsset = new XAsset();
        this.xAssetTabForm = this.formBuilder.group({
            category: [xAsset.category],
            type: [xAsset.type],
            provider: [xAsset.provider],
            valuation: [xAsset.valuation],
            valuationDate: [xAsset.valuationDate],
            description: [xAsset.description],
            policyNumber: [xAsset.policyNumber],
            yearlyIncome: [xAsset.yearlyIncome],
            taxStatus: [xAsset.taxStatus],
            incomeReinvested: [xAsset.incomeReinvested],
            regularContribution: [xAsset.regularContribution],
            contributionFrequency: [xAsset.contributionFrequency],
            indexedPercentage: [xAsset.indexedPercentage],
            premiumWaiver: [xAsset.premiumWaiver],
            lapr: [xAsset.lapr],
            ihtExempt: [xAsset.ihtExempt],
            applicationExemption: [xAsset.applicationExemption],
            purchased: [xAsset.purchased],
            inherited: [xAsset.inherited]
        });
    }
    onSubmit() {
        this.addXAsset.emit(Object.assign({}, this.xAssetTabForm.value));
        var xAsset = new XAsset();
        console.log('saving');
        this.xAssetTabForm = this.formBuilder.group({
            category: [xAsset.category],
            type: [xAsset.type],
            provider: [xAsset.provider],
            valuation: [xAsset.valuation],
            valuationDate: [xAsset.valuationDate],
            description: [xAsset.description],
            policyNumber: [xAsset.policyNumber],
            yearlyIncome: [xAsset.yearlyIncome],
            taxStatus: [xAsset.taxStatus],
            incomeReinvested: [xAsset.incomeReinvested],
            regularContribution: [xAsset.regularContribution],
            contributionFrequency: [xAsset.contributionFrequency],
            indexedPercentage: [xAsset.indexedPercentage],
            premiumWaiver: [xAsset.premiumWaiver],
            lapr: [xAsset.lapr],
            ihtExempt: [xAsset.ihtExempt],
            applicationExemption: [xAsset.applicationExemption],
            purchased: [xAsset.purchased],
            inherited: [xAsset.inherited]
        });
    }
};
__decorate([
    Output(), 
    __metadata('design:type', Object)
], AddXAssetTabComponent.prototype, "addXAsset", void 0);
AddXAssetTabComponent = __decorate([
    Component({
        selector: "add-xasset-tab",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <div class="contactTabContainer">
      <div style="height: 15px"></div>
            <form [formGroup]="xAssetTabForm" (ngSubmit)="onSubmit()">
        <div class="contact-form-row" [formGroup]="xAssetTabForm">

          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Category" [mdAutocomplete]="categorySelect" formControlName="category">
           
          </md-input-container>
          <md-autocomplete #categorySelect="mdAutocomplete">
            <md-option style="overflow: hidden !important" *ngFor="let category of categories" [value]="category">
                {{ category }}
            </md-option>
          </md-autocomplete>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Description" formControlName="description">
           
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Provider" formControlName="provider">
           
          </md-input-container>
        </div>
        <div class="contact-form-row" [formGroup]="xAssetTabForm">

          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Type" [mdAutocomplete]="typeSelect" formControlName="type">
          </md-input-container>
          <md-autocomplete #typeSelect="mdAutocomplete">
            <md-option style="overflow: hidden !important" *ngFor="let type of assetTypes" [value]="type">
                {{ type }}
            </md-option>
          </md-autocomplete>

          <md-input-container floatPlaceholder="always">
            <input mdInput [mdAutocomplete]="taxStatus" placeholder="Tax Status" formControlName="taxStatus">
          </md-input-container>
          <md-autocomplete #taxStatus="mdAutocomplete">
            <md-option style="overflow: hidden !important" *ngFor="let status of taxStatuses" [value]="status">
                {{ status }}
            </md-option>
          </md-autocomplete>

          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Policy Number" formControlName="policyNumber">
           
          </md-input-container>
        </div>
        <div class="contact-form-row" [formGroup]="xAssetTabForm">

          <md-input-container floatPlaceholder="always">
            <input type="number" mdInput placeholder="Yearly Income (£)" formControlName="yearlyIncome">
           
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input type="number" mdInput placeholder="Valuation (£)" formControlName="valuation">
           
          </md-input-container>

        </div>
        <div class="contact-form-row" [formGroup]="xAssetTabForm">

          <md-input-container floatPlaceholder="always">
            <input type="number" mdInput placeholder="Regular Contribution (£)" formControlName="regularContribution">       
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Contribution Frequency" formControlName="contributionFrequency">
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input type="number" mdInput placeholder="Indexed Percentage (%)" formControlName="indexedPercentage">       
          </md-input-container>

        </div>

        <div class="income-form-row" style="margin-top: -10px" fxLayout="row" [formGroup]="xAssetTabForm">
            <h3>Was the asset purchased or inherited?</h3>
            <md-checkbox class="selectionCheckbox" style="margin-left: 20px" formControlName="purchased">
                <span style="margin-left: 10px;">Purchased</span>
            </md-checkbox>
            <md-checkbox class="selectionCheckbox" style="margin-left: 20px" formControlName="inherited">
                <span style="margin-left: 10px;">Inherited</span>
            </md-checkbox>
        </div>
        <div class="contact-form-row" fxLayout="row" [formGroup]="xAssetTabForm">
            <md-checkbox class="selectionCheckbox" style="margin-left: 0px" formControlName="incomeReinvested">
                <span style="margin-left: 10px;">Income Re-invested</span>
            </md-checkbox>
            <md-checkbox class="selectionCheckbox" style="margin-left: 30px" formControlName="premiumWaiver">
                <span style="margin-left: 10px;">Waiver of Premium</span>
            </md-checkbox>
            <md-checkbox class="selectionCheckbox" style="margin-left: 30px" formControlName="lapr">
                <span style="margin-left: 10px;">LAPR</span>
            </md-checkbox>
        </div>
        <div class="contact-form-row" fxLayout="row" [formGroup]="xAssetTabForm">

          <md-checkbox class="selectionCheckbox" style="margin-left: 0px" formControlName="ihtExempt">
                <span style="margin-left: 10px;">IHT Exempt</span>
            </md-checkbox>
          <md-input-container style="width: 300px; margin-left: 30px">
            <input mdInput placeholder="Other Applicable Exemption / Relief" formControlName="applicationExemption">
          </md-input-container>

        </div>
        <button md-button (click)="onSubmit()"><p>Submit</p></button>




      </form>

      </div>  
    `
    }), 
    __metadata('design:paramtypes', [FormBuilder])
], AddXAssetTabComponent);
//# sourceMappingURL=add-xasset-tab.component.js.map