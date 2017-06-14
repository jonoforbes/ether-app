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
import { XAsset } from "../../entities/XAsset";
import { FormBuilder } from "@angular/forms";
export let XAssetTabComponent = class XAssetTabComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.updateXAsset = new EventEmitter();
        this.datePickerConfig = {
            showGoToCurrent: true,
            format: "DD/MM/YYYY"
        };
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
        this.xAssetTabForm = this.formBuilder.group({
            category: [this.xAsset.category],
            type: [this.xAsset.type],
            provider: [this.xAsset.provider],
            valuation: [this.xAsset.valuation],
            valuationDate: [this.xAsset.valuationDate],
            description: [this.xAsset.description],
            policyNumber: [this.xAsset.policyNumber],
            yearlyIncome: [this.xAsset.yearlyIncome],
            taxStatus: [this.xAsset.taxStatus],
            incomeReinvested: [this.xAsset.incomeReinvested],
            regularContribution: [this.xAsset.regularContribution],
            contributionFrequency: [this.xAsset.contributionFrequency],
            indexedPercentage: [this.xAsset.indexedPercentage],
            premiumWaiver: [this.xAsset.premiumWaiver],
            lapr: [this.xAsset.lapr],
            ihtExempt: [this.xAsset.ihtExempt],
            applicationExemption: [this.xAsset.applicationExemption],
            purchased: [this.xAsset.purchased],
            inherited: [this.xAsset.inherited]
        });
    }
    onSubmit() {
        this.updateXAsset.emit(Object.assign(this.xAsset, this.xAssetTabForm.value));
    }
};
__decorate([
    Input(), 
    __metadata('design:type', XAsset)
], XAssetTabComponent.prototype, "xAsset", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], XAssetTabComponent.prototype, "updateXAsset", void 0);
XAssetTabComponent = __decorate([
    Component({
        selector: "xasset-tab",
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




      </form>

        </div>
    `
    }), 
    __metadata('design:paramtypes', [FormBuilder])
], XAssetTabComponent);
//# sourceMappingURL=xasset-tab.component.js.map