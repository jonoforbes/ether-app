import { BankAccountsService } from "./services/bank-accounts.service";
import { Injectable } from "@angular/core";
import { BankAccount } from "./entities/BankAccount";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ApplicationState } from "../statemanagement/state/ApplicationState";
import { Store, Action } from "@ngrx/store";
import * as toastr from "toastr";
import { UNDO_ACTION } from "ngrx-undo";
import { AddBankAccount, RemoveBankAccount, UpdateBankAccount } from "../statemanagement/actions/data/bank-account";

@Injectable()
export class BankAccountsSandbox {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    bankAccounts$ = this.store.select(state => state.data.bankAccounts);

    constructor(private store: Store<ApplicationState>, 
                private bankAccountsService: BankAccountsService) {
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    addBankAccount(bankAccount: BankAccount): void {
        this.bankAccountsService.add(bankAccount)
        .take(1)
        .subscribe((bankAccount: BankAccount) => {
            this.store.dispatch(new AddBankAccount(bankAccount));
        }, () => this.handleError());
    }

    updateBankAccount(id: string, bankAccount: BankAccount): void {
        let action = new UpdateBankAccount(id, bankAccount);
        this.store.dispatch(action);
        this.bankAccountsService.update(id, bankAccount)
        .take(1)
        .subscribe(() => {   
        }, () => this.handleError(action));
    }

    fetchBankAccount(id: string): Observable<BankAccount> {
        console.log('bank account', id);
        // 
        return this.bankAccountsService.fetchBankAccount(id)
        .take(1)
        .share();
    }

    fetchBankAccountsByAccount(id: string): Observable<Array<BankAccount>> {
        return this.bankAccounts$
        .take(2)
        .map((bankAccounts: any) => {
            return bankAccounts.filter((bankAccount: BankAccount) => {
                return bankAccount.accountId == id;
            });
        });
    }

    fetchBankAccountByContact(id: string): Observable<Array<BankAccount>> {
        return this.bankAccounts$
        .take(2)
        .map((bankAccounts: any) => {
            return bankAccounts.filter((bankAccount: BankAccount) => {
                return bankAccount.contactId == id;
            });
        });
    }

    removeBankAccount(bankAccount: BankAccount): void {
        let action = new RemoveBankAccount(bankAccount._id);
        this.store.dispatch(action);
        this.bankAccountsService.remove(bankAccount)
        .take(1)
        .subscribe(() => {
        }, () => this.handleError(action));
    }
    
    private handleError(action?: Action): void {
        toastr.error("something went wrong");
        if (action) {
            this.store.dispatch({type: UNDO_ACTION, payload: action});
        }
    }
}