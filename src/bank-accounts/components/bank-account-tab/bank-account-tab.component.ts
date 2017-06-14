import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { BankAccount } from "../../entities/BankAccount";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
    selector: "bank-account-tab",
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

})
export class BankAccountTabComponent {
    @Input() bankAccount: BankAccount;
    @Output() updateBankAccount = new EventEmitter<BankAccount>();

    constructor(private formBuilder: FormBuilder) {

    }

    accountTypes: any = [
        'UK',
        'Non-UK'
    ];

    bankAccountTabForm: FormGroup;

    ngOnInit(): void {
        this.bankAccountTabForm = this.formBuilder.group({
            accountType: [this.bankAccount.accountType],
            accountName: [this.bankAccount.accountName],
            bankName: [this.bankAccount.bankName],
            accountNumber: [this.bankAccount.accountNumber],
            sortCode: [this.bankAccount.sortCode],
            swiftCode: [this.bankAccount.swiftCode],
            iban: [this.bankAccount.iban]
        });
    }

    onSubmit(): void {
        this.updateBankAccount.emit(Object.assign(this.bankAccount, this.bankAccountTabForm.value));
    }
}