import { type } from "../../util/util";
import { Action } from "@ngrx/store";
import { BankAccount } from "../../../bank-accounts/entities/BankAccount";

export const ActionTypes = {
    BANK_ACCOUNTS_ADD: type("DATA_BANK_ACCOUNTS_ADD"),
    BANK_ACCOUNTS_REMOVE: type("DATA_BANK_ACCOUNTS_REMOVE"),
    BANK_ACCOUNTS_UPDATE: type("DATA_BANK_ACCOUNTS_UPDATE"),
    BANK_ACCOUNTS_SET_ALL: type("DATA_BANK_ACCOUNTS_ADD_ALL")
}

export class AddBankAccount implements Action {
    type = ActionTypes.BANK_ACCOUNTS_ADD;
    payload: {bankAccount: BankAccount};

    constructor(bankAccount: BankAccount) {
        this.payload = {bankAccount};
    }
}

export class RemoveBankAccount implements Action {
    type = ActionTypes.BANK_ACCOUNTS_REMOVE;
    payload: {_id: string};

    constructor(_id: string) {
        this.payload = {_id};
    }
}

export class UpdateBankAccount implements Action {
    type = ActionTypes.BANK_ACCOUNTS_UPDATE;
    payload: {_id: string, bankAccount: BankAccount};

    constructor(_id: string, bankAccount: BankAccount) {
        this.payload = {_id, bankAccount}
    }
}

export class SetAllBankAccounts implements Action {
    type = ActionTypes.BANK_ACCOUNTS_SET_ALL;
    payload: {bankAccounts: BankAccount[]};

    constructor(bankAccounts: BankAccount[]) {
        this.payload = {bankAccounts}
    }
}

export type Actions = 
    AddBankAccount
    | RemoveBankAccount
    | UpdateBankAccount
    | SetAllBankAccounts;