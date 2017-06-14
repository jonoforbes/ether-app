var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { BankAccount } from "../../entities/BankAccount";
import { FormBuilder } from "@angular/forms";
export let AddBankAccountTabComponent = class AddBankAccountTabComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.addBankAccount = new EventEmitter();
        this.accountTypes = [
            'UK',
            'Non-UK'
        ];
    }
    ngOnInit() {
        var bankAccount = new BankAccount();
        this.bankAccountTabForm = this.formBuilder.group({
            accountType: [bankAccount.accountType],
            accountName: [bankAccount.accountName],
            bankName: [bankAccount.bankName],
            accountNumber: [bankAccount.accountNumber],
            sortCode: [bankAccount.sortCode],
            swiftCode: [bankAccount.swiftCode],
            iban: [bankAccount.iban]
        });
    }
    onSubmit() {
        this.addBankAccount.emit(Object.assign({}, this.bankAccountTabForm.value));
        var bankAccount = new BankAccount();
        console.log('saving');
        this.bankAccountTabForm = this.formBuilder.group({
            accountType: [bankAccount.accountType],
            accountName: [bankAccount.accountName],
            bankName: [bankAccount.bankName],
            accountNumber: [bankAccount.accountNumber],
            sortCode: [bankAccount.sortCode],
            swiftCode: [bankAccount.swiftCode],
            iban: [bankAccount.iban]
        });
    }
};
__decorate([
    Output(), 
    __metadata('design:type', Object)
], AddBankAccountTabComponent.prototype, "addBankAccount", void 0);
AddBankAccountTabComponent = __decorate([
    Component({
        selector: "add-bank-account-tab",
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <div class="contactTabContainer">
      <div style="height: 15px"></div>
            <form [formGroup]="bankAccountTabForm" (ngSubmit)="onSubmit()">

        <div class="contact-form-row" [formGroup]="bankAccountTabForm">
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Account Type" [mdAutocomplete]="accountTypeSelect" formControlName="accountType">    
          </md-input-container>
          <md-autocomplete #accountTypeSelect="mdAutocomplete">
            <md-option style="overflow: hidden !important" *ngFor="let type of accountTypes" [value]="type">
                {{ type }}
            </md-option>
          </md-autocomplete>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Account Name" formControlName="accountName">         
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Bank Name" formControlName="bankName">         
          </md-input-container>
        </div>

        <div class="contact-form-row" *ngIf="this.bankAccountTabForm.controls['accountType'].value =='UK'" [formGroup]="bankAccountTabForm">
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Account Number" formControlName="accountNumber">         
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Sort Code" formControlName="sortCode">         
          </md-input-container>
        </div>

        <div class="contact-form-row" *ngIf="this.bankAccountTabForm.controls['accountType'].value =='Non-UK'" [formGroup]="bankAccountTabForm">
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="IBAN" formControlName="iban">         
          </md-input-container>
          <md-input-container floatPlaceholder="always">
            <input mdInput placeholder="Swift Code" formControlName="swiftCode">         
          </md-input-container>
        </div>

        

        
        <button md-button type="button" (click)="onSubmit()"><p>Submit</p></button>




      </form>

      </div>  
    
    
    
    
    `
    }), 
    __metadata('design:paramtypes', [FormBuilder])
], AddBankAccountTabComponent);
//# sourceMappingURL=add-bank-account-tab.component.js.map