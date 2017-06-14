var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BankAccountsService } from "./services/bank-accounts.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Store } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddBankAccount, RemoveBankAccount, UpdateBankAccount } from "../statemanagement/actions/data/bank-account";
export let BankAccountsSandbox = class BankAccountsSandbox {
    constructor(store, bankAccountsService) {
        this.store = store;
        this.bankAccountsService = bankAccountsService;
        this.ngUnsubscribe = new Subject();
        this.bankAccounts$ = this.store.select(state => state.data.bankAccounts);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    addBankAccount(bankAccount) {
        this.bankAccountsService.add(bankAccount)
            .take(1)
            .subscribe((bankAccount) => {
            this.store.dispatch(new AddBankAccount(bankAccount));
        }, () => this.handleError());
    }
    updateBankAccount(id, bankAccount) {
        let action = new UpdateBankAccount(id, bankAccount);
        this.store.dispatch(action);
        this.bankAccountsService.update(id, bankAccount)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    fetchBankAccount(id) {
        console.log('bank account', id);
        return this.bankAccountsService.fetchBankAccount(id)
            .take(1)
            .share();
    }
    fetchBankAccountsByAccount(id) {
        return this.bankAccounts$
            .take(2)
            .map((bankAccounts) => {
            return bankAccounts.filter((bankAccount) => {
                return bankAccount.accountId == id;
            });
        });
    }
    fetchBankAccountByContact(id) {
        return this.bankAccounts$
            .take(2)
            .map((bankAccounts) => {
            return bankAccounts.filter((bankAccount) => {
                return bankAccount.contactId == id;
            });
        });
    }
    removeBankAccount(bankAccount) {
        let action = new RemoveBankAccount(bankAccount._id);
        this.store.dispatch(action);
        this.bankAccountsService.remove(bankAccount)
            .take(1)
            .subscribe(() => {
        }, () => this.handleError(action));
    }
    handleError(action) {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({ type: UNDO_ACTION, payload: action });
        }
    }
};
BankAccountsSandbox = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Store, BankAccountsService])
], BankAccountsSandbox);
//# sourceMappingURL=bank-accounts.sandbox.js.map