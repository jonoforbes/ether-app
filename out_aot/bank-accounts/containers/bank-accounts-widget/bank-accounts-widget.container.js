var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs/Subject";
import { BankAccountsSandbox } from "../../bank-accounts.sandbox";
export let BankAccountsWidgetContainer = class BankAccountsWidgetContainer {
    constructor(sb, route) {
        this.sb = sb;
        this.route = route;
        this.bankAccountOwnerType = "Joint";
        this.bankAccountContactId = "";
        this.routeId = "";
        this.ngUnsubscribe = new Subject();
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    logInputs() {
        console.log('owenr type', this.bankAccountOwnerType);
        console.log('contact', this.bankAccountContactId);
    }
    ngOnChanges(simpleChanges) {
        this.refreshBankAccounts();
    }
    refreshBankAccounts() {
        const params$ = this.route.params.take(1);
        params$.take(1).subscribe((params) => {
            this.routeId = params['id'];
        });
        if (this.bankAccountOwnerType == "Joint") {
            console.log('fetching joint bank accounts');
            this.bankAccounts$ = params$
                .switchMap((params) => this.sb.fetchBankAccountsByAccount(params['id']).takeUntil(this.ngUnsubscribe));
        }
        else {
            console.log('fetching personal bank accounts');
            this.bankAccounts$ = this.sb.fetchBankAccountByContact(this.bankAccountContactId).takeUntil(this.ngUnsubscribe);
        }
    }
    onSave(bankAccount) {
        if (this.bankAccountOwnerType == "Personal") {
            let bankAccountWithProps = Object.assign({}, bankAccount, {
                accountOwnerType: "Personal",
                contactId: this.bankAccountContactId
            });
            console.log('Personal Bank Account', bankAccountWithProps);
            this.sb.addBankAccount(bankAccountWithProps);
        }
        if (this.bankAccountOwnerType == "Joint") {
            let bankAccountWithProps = Object.assign({}, bankAccount, {
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
    onUpdate(bankAccount) {
        this.sb.updateBankAccount(bankAccount._id, bankAccount);
    }
};
__decorate([
    Input(), 
    __metadata('design:type', String)
], BankAccountsWidgetContainer.prototype, "bankAccountOwnerType", void 0);
__decorate([
    Input(), 
    __metadata('design:type', String)
], BankAccountsWidgetContainer.prototype, "bankAccountContactId", void 0);
BankAccountsWidgetContainer = __decorate([
    Component({
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
    }), 
    __metadata('design:paramtypes', [BankAccountsSandbox, ActivatedRoute])
], BankAccountsWidgetContainer);
//# sourceMappingURL=bank-accounts-widget.container.js.map