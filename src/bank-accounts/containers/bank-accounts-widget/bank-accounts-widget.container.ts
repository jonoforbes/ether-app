import { Component, Input, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { BankAccount } from "../../entities/BankAccount";
import { ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { BankAccountsSandbox } from "../../bank-accounts.sandbox";

@Component({
    selector: "bank-accounts-widget",
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    
    <md-tab-group [selectedIndex]="1">
        <md-tab label="+">
        <add-bank-account-tab (addBankAccount)="onSave($event)" ></add-bank-account-tab>
        </md-tab>
        <md-tab *ngFor="let bankAccount of this.bankAccounts$|async" label="{{bankAccount.bankName}}">
            <bank-account-tab (updateBankAccount)="onUpdate($event)" [bankAccount]="bankAccount"></bank-account-tab>
        </md-tab>      
    </md-tab-group>
    <button md-button (click)="logInputs()"><p style="color: #838383">Test Inputs</p></button>
    `


})
export class BankAccountsWidgetContainer {
    @Input() bankAccountOwnerType: string = "Joint";
    @Input() bankAccountContactId: string = "";
    routeId: string = "";

    constructor(private sb: BankAccountsSandbox,
                private route: ActivatedRoute) {

    }

    private ngUnsubscribe: Subject<void> = new Subject<void>();
    bankAccounts$: Observable<Array<BankAccount>>;

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    logInputs() {
        console.log('owenr type', this.bankAccountOwnerType);
        console.log('contact', this.bankAccountContactId);
    }

    ngOnChanges(simpleChanges: any) {
        this.refreshBankAccounts();
    }

    refreshBankAccounts(): void {
        const params$ = this.route.params.take(1);

        params$.take(1).subscribe((params: Params) => {
            this.routeId = params['id'];
        });

        if (this.bankAccountOwnerType == "Joint") {
            console.log('fetching joint bank accounts');
            this.bankAccounts$ = params$
                .switchMap((params: Params) => this.sb.fetchBankAccountsByAccount(params['id']).takeUntil(this.ngUnsubscribe));
        }
        else {
            console.log('fetching personal bank accounts');
            this.bankAccounts$ = this.sb.fetchBankAccountByContact(this.bankAccountContactId).takeUntil(this.ngUnsubscribe);
        }
    }

    onSave(bankAccount: BankAccount): void {
        if (this.bankAccountOwnerType == "Personal") {
            let bankAccountWithProps: BankAccount = Object.assign({}, bankAccount, {
                accountOwnerType: "Personal",
                contactId: this.bankAccountContactId
            });
            console.log('Personal Bank Account', bankAccountWithProps);
            this.sb.addBankAccount(bankAccountWithProps);
        }
        if (this.bankAccountOwnerType == "Joint") {
            let bankAccountWithProps: BankAccount = Object.assign({}, bankAccount, {
                accountOwnerType: "Joint",
                accountId: this.routeId
            });
            console.log("Joint bank account");
            this.sb.addBankAccount(bankAccountWithProps);
        }
        else {
            return;
        }
    }

    onUpdate(bankAccount: BankAccount): void {
        this.sb.updateBankAccount(bankAccount._id, bankAccount);
    }
}